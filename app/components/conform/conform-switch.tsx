import { type FieldMetadata, getInputProps } from '@conform-to/react';
import { Label } from '~/components/ui/label';
import { Switch } from '~/components/ui/switch';

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
  const { type, ...inputProps } = getInputProps(metadata, {
    type: 'checkbox',
    value: 'true',
  });

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2">
        <Switch
          {...inputProps}
          {...props}
          id={inputProps.id}
          className={`${className} ${!!metadata.errors && 'border-red-500'}`}
        />
        <Label htmlFor={inputProps.id}>{label}</Label>
      </div>
      {metadata.errors && (
        <div>
          {metadata.errors.map((e, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <p key={index} className="py-2 text-red-500">
              {e}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export { ConformSwitch };
