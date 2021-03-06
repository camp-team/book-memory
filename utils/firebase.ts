import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import firebase from 'firebase/app';
import { Fuego } from '@nandorojo/swr-firestore';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_DOMAIN,
  databeseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
};

const fuego = new Fuego(config);

//Googleログインの設定値
const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: () => true,
  },
  signInSuccessUrl: '/library',
};

//退会処理の呼び出し
const app = firebase.app();
const functions = app.functions('asia-northeast1');
const callable = functions.httpsCallable('deleteUser');

export { uiConfig, fuego, callable };
