import { type FieldMetadata, getInputProps } from "@conform-to/react";
import { Textarea } from "~/components/ui/textarea";

interface ConformTextareaProps<Schema>
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  metadata: FieldMetadata<Schema>;
}

const ConformTextarea = <Schema,>({
  metadata,
  className,
  ...props
}: ConformTextareaProps<Schema>) => {
  const inputProps = getInputProps(metadata, { type: "text" });

  return (
    <div className="flex flex-col">
      <Textarea
        {...inputProps}
        {...props}
        className={`${className} ${!!metadata.errors && "border-red-500"}`}
      />
      {metadata.errors && (
        <div>
          {metadata.errors.map((e, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: ignore
            <p className="py-2 text-red-500" key={index}>
              {e}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export { ConformTextarea };
