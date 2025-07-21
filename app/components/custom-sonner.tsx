import { useTheme } from 'next-themes';
import { type ExternalToast, Toaster as Sonner, toast } from 'sonner';

type CustomToasterProps = React.ComponentProps<typeof Sonner>;

const CustomToaster = ({ ...props }: CustomToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as CustomToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          // NOTE: Must add !important to reflect changes on screen
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:!text-muted-foreground',
          actionButton:
            'group-[.toast]:!bg-primary group-[.toast]:!text-primary-foreground',
          cancelButton:
            'group-[.toast]:!bg-muted group-[.toast]:!text-muted-foreground',
          info: 'group toast group-[.toaster]:!border group-[.toaster]:!border-gray-300 group-[.toaster]:!bg-white group-[.toaster]:!text-gray-600 group-[.toaster]:!shadow-lg',
          success:
            'group toast group-[.toaster]:!border group-[.toaster]:!border-green-300 group-[.toaster]:!bg-green-100 group-[.toaster]:!text-green-600 group-[.toaster]:!shadow-lg',
          warning:
            'group toast group-[.toaster]:!border group-[.toaster]:!border-yellow-300 group-[.toaster]:!bg-yellow-100 group-[.toaster]:!text-yellow-600 group-[.toaster]:!shadow-lg',
          error:
            'group toast group-[.toaster]:!border group-[.toaster]:!border-red-300 group-[.toaster]:!bg-red-100 group-[.toaster]:!text-red-600 group-[.toaster]:!shadow-lg',
        },
      }}
      {...props}
    />
  );
};

type ToastType = 'info' | 'success' | 'warning' | 'error';

const showToast = (
  type: ToastType,
  message: React.ReactNode | (() => React.ReactNode),
  data?: ExternalToast,
) => {
  switch (type) {
    case 'info':
      toast.info(message, {
        duration: data?.duration ?? 2000,
        position: data?.position ?? 'bottom-center',
        ...data,
      });
      break;
    case 'success':
      toast.success(message, {
        duration: data?.duration ?? 2000,
        position: data?.position ?? 'bottom-center',
        ...data,
      });
      break;
    case 'warning':
      toast.warning(message, {
        duration: data?.duration ?? 2000,
        position: data?.position ?? 'bottom-center',
        ...data,
      });
      break;
    case 'error':
      toast.error(message, {
        duration: data?.duration ?? 2000,
        position: data?.position ?? 'bottom-center',
        ...data,
      });
      break;
    default:
      throw new Error(`Unknown toast type: ${type}`);
  }
};

export { CustomToaster, showToast, type ToastType };
