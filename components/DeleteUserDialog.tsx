import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fuego } from '../utils/firebase';
import { deleteDocument, useCollection } from '@nandorojo/swr-firestore';
import Router from 'next/router';

type Props = {
  open: boolean;
  closeHandle: VoidFunction;
};

export default function DeleteUserDialog({ open, closeHandle }: Props) {
  const currentUser = fuego.auth().currentUser;
  const { data } = useCollection(`users/${currentUser?.uid}/books`);

  // 退会処理
  const onClickDeleteUser = (uid: string) => {
    data?.map((userBook) => {
      deleteDocument(`users/${uid}/books/${userBook.id}`);
    });
    deleteDocument(`users/${uid}`);
    closeHandle();
    Router.push('/');
    fuego.auth().signOut();
    fuego.auth().currentUser?.delete();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={closeHandle}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          退会します。宜しいですか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            退会すると作成されたライブラリは全て削除され、戻すことはできません。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            onClick={closeHandle}
            className='bg-gray-200 p-2 mr-1 rounded-md focus:outline-none '
          >
            キャンセル
          </button>
          <button
            onClick={() => {
              currentUser && onClickDeleteUser(currentUser.uid);
            }}
            className='bg-red-500 text-white p-2 mr-1 rounded-md '
          >
            退会する
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
