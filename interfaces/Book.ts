import firebase from 'firebase';
import 'firebase/firestore';

export type Book = {
  bid: string;
  title: string;
  imgUrl: string;
};

export type BookCount = {
  data:
    | {
        bookCount?: number;
        id: string;
        exists?: boolean | undefined;
        hasPendingWrites?: boolean | undefined;
        __snapshot?: firebase.firestore.QueryDocumentSnapshot | undefined;
      }
    | null
    | undefined;
};
