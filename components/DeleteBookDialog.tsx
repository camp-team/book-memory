import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type Props = {
  open: boolean;
  onClickDeleteBook: any;
  closeHandle: VoidFunction;
  bid: string;
};

export default function DeleteBookDialog({
  open,
  onClickDeleteBook,
  closeHandle,
  bid,
}: Props) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={closeHandle}
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
            onClick={closeHandle}
            className="bg-gray-200 p-2 mr-1 rounded-md focus:outline-none "
          >
            キャンセル
          </button>
          <button
            onClick={() => {
              onClickDeleteBook(bid);
              closeHandle();
            }}
            className="bg-red-500 text-white p-2 mr-1 rounded-md "
          >
            削除
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
