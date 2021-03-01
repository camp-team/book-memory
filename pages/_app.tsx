import Head from "next/head";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import "tailwindcss/tailwind.css";
import { User } from "firebase";

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
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  });

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AuthContext.Provider value={{ currentUser }}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </>
  );
};

export default MyApp;
