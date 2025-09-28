import { getFormProps } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useEffect } from "react";
import { Form } from "react-router";
import { ConformInput } from "~/components/conform/conform-input";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import type { Route } from "./+types/route";
import { sampleFormSchema, useSampleForm } from "./hooks/use-sample-form";

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  // Server-side validation check
  const submission = parseWithZod(formData, { schema: sampleFormSchema });

  if (submission.status !== "success") {
    return {
      success: false,
      message: "Validation failed!",
      submission: submission.reply(),
    };
  }

  // Implement database registration process here

  return {
    success: true,
    message: "Registration completed successfully!",
    submission: submission.reply(),
  };
};

const DemoConformPage = ({ actionData }: Route.ComponentProps) => {
  const [form, { name, email }] = useSampleForm();

  useEffect(() => {
    // biome-ignore lint/suspicious/noConsole: ignore
    console.log(actionData);

    if (actionData) {
      // Display message
      // biome-ignore lint/suspicious/noAlert: ignore
      window.confirm(actionData?.message);
    }
  }, [actionData]);

  return (
    <Form method="post" {...getFormProps(form)} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <ConformInput
          defaultValue={"abc"}
          metadata={name}
          placeholder="name..."
          type="text"
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <ConformInput
          defaultValue={"abc@test.com"}
          metadata={email}
          placeholder="email..."
          type="email"
        />
      </div>
      <Button className="self-start" type="submit">
        Regist
      </Button>
    </Form>
  );
};

export default DemoConformPage;
