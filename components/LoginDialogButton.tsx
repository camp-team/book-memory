import React, { useState } from 'react';
import Router from 'next/router';
import LoginDialog from '../components/LoginDialog';
import { fuego } from '../utils/firebase';

type Props = {
  children: string;
  stylecss: string;
};

const LoginDialogButton = ({ children, stylecss }: Props) => {
  const currentUser = fuego.auth().currentUser;
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    {
      currentUser ? Router.push('/library') : setOpen(true);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button className={stylecss} onClick={handleClickOpen}>
        {children}
      </button>
      <LoginDialog open={open} close={handleClose} />
    </>
  );
};

export default LoginDialogButton;
