import React, { ReactNode } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';

type Props = {
  open: boolean;
  close: VoidFunction;
  children: ReactNode;
  severity: Color;
};
// Snackbar表示用
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const SnackbarComponent = ({
  open,
  close,
  children,
  severity,
}: Props) => {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={close}>
      <Alert onClose={close} severity={severity}>
        {children}
      </Alert>
    </Snackbar>
  );
};
