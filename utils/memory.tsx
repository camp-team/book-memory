import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import { useEffect, useState } from 'react';

import { fuego } from '../utils/firebase';

//Firebase上のメモリー監視用フック
//変更があったタイミングで対象本のメモリーを返却
export const useMemory = (id: string) => {
  const [memories, setMemory] = useState<any>();
  const currentUser = fuego.auth().currentUser;
  useEffect(() => {
    const unsub = firebase
      .firestore()
      .doc(`users/${currentUser?.uid}/books/${id}`)
      .onSnapshot((snap) => {
        setMemory(snap.data()?.memories || []);
      });
    return unsub;
  }, []);
  return memories;
};

//メモリー作成（追加、編集、削除、全てこの関数で行う）
//配列丸ごと更新させる
export const addMemory = (id: string, newMemories?: string[]) => {
  const currentUser = fuego.auth().currentUser;
  firebase.firestore().doc(`users/${currentUser?.uid}/books/${id}`).update({
    memories: newMemories,
  });
};
