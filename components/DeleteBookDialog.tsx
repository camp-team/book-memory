import React, { memo, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { deleteBook } from '../utils/book';
import { SnackbarComponent } from './SnackbarComponent';

type Props = {
  open: boolean;
  handleClose: VoidFunction;
  bid: string;
};

export const DeleteBookDialog = memo(({ open, handleClose, bid }: Props) => {
  // Snackbar表示用（本削除）
  const [openSnackbarDeleteBook, setOpenSnackbarDeleteBook] = useState(false);
  // 本削除関数
  const onClickDeleteBook = (index: string) => {
    deleteBook(index);
    setOpenSnackbarDeleteBook(true);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          ライブラリから削除します。宜しいですか？
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            削除した本のメモは復活することはできません
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            className="bg-gray-200 p-2 mr-1 rounded-md focus:outline-none "
          >
            キャンセル
          </button>
          <button
            onClick={() => {
              onClickDeleteBook(bid);
              handleClose();
            }}
            className="bg-red-500 text-white p-2 mr-1 rounded-md "
          >
            削除
          </button>
        </DialogActions>
      </Dialog>
      <SnackbarComponent
        open={openSnackbarDeleteBook}
        close={() => setOpenSnackbarDeleteBook(false)}
        severity="info"
        autoHideDuration={2000}
      >
        ライブラリから本を削除しました
      </SnackbarComponent>
    </div>
  );
});
