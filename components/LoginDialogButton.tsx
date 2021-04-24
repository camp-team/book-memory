import React, { useState } from 'react';
import Router from 'next/router';
import LoginDialog from '../components/LoginDialog';
import { fuego } from '../utils/firebase';

type Props = {
  children: string;
};

const LoginDialogButton = ({ children }: Props) => {
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
      <button
        className={
          children === 'はじめる'
            ? 'mt-10 bg-white px-12 py-4 border rounded-full shadow-sm text-base font-medium text-blue-600 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2'
            : children === '使ってみる'
            ? 'bg-blue-600 whitespace-nowrap px-12 py-4 border-2 border-blue-600 rounded-full shadow-sm text-base font-medium text-white hover:bg-green-50 hover:text-blue-500 focus:outline-none focus:ring-2'
            : 'ml-4 p-2 border border-white rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-500'
        }
        onClick={handleClickOpen}
      >
        {children}
      </button>
      <LoginDialog open={open} close={handleClose} />
    </>
  );
};

export default LoginDialogButton;
