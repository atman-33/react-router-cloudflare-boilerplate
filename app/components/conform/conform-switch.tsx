import { type FieldMetadata, getInputProps } from "@conform-to/react";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";

interface ConformSwitchProps<Schema>
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  metadata: FieldMetadata<Schema>;
  label: string;
}

const ConformSwitch = <Schema,>({
  metadata,
  label,
  className,
  ...props
}: ConformSwitchProps<Schema>) => {
  // biome-ignore lint/correctness/noUnusedVariables: ignore
  const { type, ...inputProps } = getInputProps(metadata, {
    type: "checkbox",
    value: "true",
  });

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2">
        <Switch
          {...inputProps}
          {...props}
          className={`${className} ${!!metadata.errors && "border-red-500"}`}
          id={inputProps.id}
        />
        <Label htmlFor={inputProps.id}>{label}</Label>
      </div>
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

export { ConformSwitch };
