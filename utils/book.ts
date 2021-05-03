import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { fuego } from '../utils/firebase';
import { format } from 'date-fns';

export const addBook = (bid: string, name: string, imgUrl: string) => {
  const currentUser = fuego.auth().currentUser;
  const createdat = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  currentUser &&
    firebase.firestore().doc(`users/${currentUser.uid}/books/${bid}`).set({
      name: name,
      imgUrl: imgUrl,
      createdat: createdat,
      memories: [],
    });
};

export const deleteBook = (bid: string) => {
  const currentUser = fuego.auth().currentUser;
  currentUser &&
    firebase.firestore().doc(`users/${currentUser.uid}/books/${bid}`).delete();
};
