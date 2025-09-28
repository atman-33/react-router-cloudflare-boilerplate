import { toast } from "sonner";
import { showToast } from "~/components/custom-sonner";
import { Button } from "~/components/ui/button";
import { generateMeta } from "~/lib/meta";
import type { Route } from "./+types/route";

export function meta(_: Route.MetaArgs) {
  return generateMeta({
    title: "Sonner Toast Demo",
    description: "Demo of Sonner toast notifications with custom styling",
    keywords: ["sonner", "toast", "notifications", "demo"],
    noIndex: true, // Don't index demo pages
  });
}

const DemoToastPage = () => (
  <div className="flex flex-col gap-4">
    <Button
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
      variant="outline"
    >
      Show Toast
    </Button>
    <Button
      onClick={() =>
        showToast("info", "Information", {
          description: "This is an informational message",
          action: {
            label: "Got it",
            onClick: () => console.log("Got it"),
          },
          cancel: {
            label: "Cancel",
            onClick: () => console.log("Cancel"),
          },
        })
      }
      variant="outline"
    >
      Info
    </Button>
    <Button
      onClick={() =>
        showToast("success", "Event created successfully", {
          description: "Your event has been created",
          action: {
            label: "View",
            onClick: () => console.log("View"),
          },
        })
      }
      variant="outline"
    >
      Success
    </Button>
    <Button
      onClick={() =>
        showToast("warning", "Warning", {
          description: "This action is irreversible",
          action: {
            label: "Proceed",
            onClick: () => console.log("Proceed"),
          },
        })
      }
      variant="outline"
    >
      Warning
    </Button>
    <Button
      onClick={() =>
        showToast("error", "An error occurred", {
          description: "Unable to create event",
          action: {
            label: "Retry",
            onClick: () => console.log("Retry"),
          },
        })
      }
      variant="outline"
    >
      Error
    </Button>
  </div>
);

export default DemoToastPage;
