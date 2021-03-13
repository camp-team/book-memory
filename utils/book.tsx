import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { useEffect, useState } from 'react';

export const addBook = (id: string, name: string, imgUrl: string) => {
  firebase.firestore().doc(`books/${id}`).set({
    name: { name },
    imgUrl: { imgUrl },
    memories: [],
  });
};

//？？？？Bookの状態は持っておく必要ない？？？？
// export const useBook = (id: string) => {
//   const [memories, setMemory] = useState<any>();

//   useEffect(() => {
//     firebase
//       .firestore()
//       .doc(`books/${id}`)
//       .onSnapshot((snap) => {
//         setMemory(snap.data()?.comments || []);
//       });
//   }, []);

//   return memories;
// };
