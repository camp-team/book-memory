import Head from 'next/head';
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;