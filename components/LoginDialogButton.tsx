import React, { useState, useContext } from "react";
import Router from "next/router";
import LoginDialog from "../components/LoginDialog";
import { AuthContext } from "../pages/_app";

type Props = {
  children: string;
  stylecss: string;
};

const LoginDialogButton = ({ children, stylecss }: Props) => {
  const auth = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    {
      auth.currentUser ? Router.push("/library") : setOpen(true);
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
