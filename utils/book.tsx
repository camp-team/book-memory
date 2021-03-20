import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';

export const addBook = (id: string, name: string, imgUrl: string) => {
  firebase.firestore().doc(`books/${id}`).set({
    name: { name },
    imgUrl: { imgUrl },
    memories: [],
  });
};
