import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { fuego } from '../utils/firebase';

export const addBook = (bid: string, name: string, imgUrl: string) => {
  const currentUser = fuego.auth().currentUser;
  currentUser &&
    firebase.firestore().doc(`users/${currentUser.uid}/books/${bid}`).set({
      name: name,
      imgUrl: imgUrl,
      memories: [],
    });
};

export const deleteBook = (bid: string) => {
  const currentUser = fuego.auth().currentUser;
  currentUser &&
    firebase.firestore().doc(`users/${currentUser.uid}/books/${bid}`).delete();
};
