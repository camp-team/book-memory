import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { uiConfig, fuego } from '../utils/firebase';

export interface LoginDialogProps {
  open: boolean;
  close: (value: string) => void;
}

const LoginDialog = (props: LoginDialogProps) => {
  const { open, close } = props;

  return (
    <Dialog onClose={close} aria-labelledby="simple-dialog-title" open={open}>
      <div className="text-center p-4">
        <p className="text-lg font-semibold">読書管理をはじめる</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fuego.auth()} />
        <p className="text-sm font-medium p-2">
          ※Googleアカウントでのみログインできます
        </p>
      </div>
    </Dialog>
  );
};

export default LoginDialog;
