import Head from 'next/head';
import { createContext, useEffect, useState } from 'react';
import { fuego } from '../utils/firebase';
import 'tailwindcss/tailwind.css';
import { User } from 'firebase';
import { FuegoProvider } from '@nandorojo/swr-firestore';
import AOS from 'aos';
import 'aos/dist/aos.css';

type AuthContextProps = {
  currentUser: User | null | undefined;
};

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
});

const MyApp = ({ Component, pageProps }: any) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 200,
      duration: 600,
    });
  }, []);

  useEffect(() => {
    fuego.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(currentUser); //deploy回避用
    });
  });
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="images/favicon.ico" />
      </Head>
      <FuegoProvider fuego={fuego}>
        <Component {...pageProps} />
      </FuegoProvider>
    </>
  );
};

export default MyApp;
