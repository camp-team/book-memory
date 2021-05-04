import Head from 'next/head';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { fuego } from '../utils/firebase';
import 'tailwindcss/tailwind.css';
import { FuegoProvider } from '@nandorojo/swr-firestore';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 200,
      duration: 600,
    });
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="icons/favicon.ico" />
      </Head>
      <FuegoProvider fuego={fuego}>
        <Component {...pageProps} />
      </FuegoProvider>
    </>
  );
};

export default MyApp;
