import { type FieldMetadata, getInputProps } from "@conform-to/react";
import { Input } from "~/components/ui/input";

type OptionType =
  | "number"
  | "search"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "month"
  | "password"
  | "range"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

interface ConformInputProps<Schema>
  extends React.InputHTMLAttributes<HTMLInputElement> {
  metadata: FieldMetadata<Schema>;
}

const ConformInput = <Schema,>({
  metadata,
  className,
  ...props
}: ConformInputProps<Schema>) => {
  const { type, ...restProps } = props;
  const inputProps = getInputProps(metadata, { type: type as OptionType });

  return (
    <div className="flex flex-col">
      <Input
        {...inputProps}
        {...restProps}
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

export { ConformInput };
