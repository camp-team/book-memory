import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fuego } from '../utils/firebase';
import Router from 'next/router';

type Props = {
  open: boolean;
  handelClick: VoidFunction;
};

export default function DeleteUserDialog({ open, handelClick }: Props) {
  const currentUser = fuego.auth().currentUser;

  // 退会処理
  const onClickDeleteUser = async () => {
    handelClick();
    await fuego
      .auth()
      .currentUser?.delete()
      .catch(() => {
        alert(
          `退会するには再認証が必要です。お手数ですが、再度ログインしてもう一度退会処理を実行して下さい。`
        );
      });
    await Router.push('/');
    await fuego.auth().signOut();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handelClick}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          退会します。宜しいですか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            退会すると作成されたライブラリは全て削除され、戻すことはできません。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handelClick}
            className="bg-gray-200 p-2 mr-1 rounded-md focus:outline-none "
          >
            キャンセル
          </button>
          <button
            onClick={() => {
              currentUser && onClickDeleteUser();
            }}
            className="bg-red-500 text-white p-2 mr-1 rounded-md "
          >
            退会する
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
