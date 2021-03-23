import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

export const addBook = (
  uid: string,
  bid: string,
  name: string,
  imgUrl: string
) => {
  firebase.firestore().doc(`users/${uid}/books/${bid}`).set({
    name: name,
    imgUrl: imgUrl,
    memories: [],
  });
};
