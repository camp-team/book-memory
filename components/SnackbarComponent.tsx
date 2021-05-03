import React, { memo, ReactNode } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';

type Props = {
  open: boolean;
  close: VoidFunction;
  children: ReactNode;
  severity: Color;
  autoHideDuration?: number;
};
// Snackbar表示用
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const SnackbarComponent = memo(
  ({ open, close, children, severity, autoHideDuration }: Props) => {
    return (
      <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={close}>
        <Alert onClose={close} severity={severity}>
          {children}
        </Alert>
      </Snackbar>
    );
  }
);
