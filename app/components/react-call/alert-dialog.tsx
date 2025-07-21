// app/components/shared/react-call/alert-dialog.tsx
import { createCallable } from 'react-call';
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialog as ShadcnAlertDialog,
} from '~/components/ui/alert-dialog';

interface Props {
  message: string;
  title?: string;
  cancelButtonLabel?: string;
  actionButtonLabel?: string;
}
type Response = 'cancel' | 'action';

export const AlertDialog = createCallable<Props, Response>(
  ({ call, message, title, cancelButtonLabel, actionButtonLabel }) => (
    <ShadcnAlertDialog open>
      <AlertDialogContent>
        <AlertDialogHeader>
          {title && <AlertDialogTitle>{title}</AlertDialogTitle>}
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => call.end('cancel')}>
            {cancelButtonLabel ?? 'Cancel'}
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => call.end('action')}>
            {actionButtonLabel ?? 'Continue'}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShadcnAlertDialog>
  ),
);