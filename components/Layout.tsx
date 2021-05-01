import React, { ReactNode } from 'react';
import { Header } from './HeaderComponent';
import Footer from './FooterComponent';

type Props = {
  children?: ReactNode;
  title?: string;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
