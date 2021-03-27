import React, { MouseEvent, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ListItemIcon } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import DeleteBookDialog from '../components/DeleteBookDialog';
import { deleteBook } from '../utils/book';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

type Props = {
  bid: string;
};

// Snacbar表示用↓
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
const useStyles = makeStyles({
  root: {
    minWidth: 32,
  },
});

const MemoryMoreVert = ({ bid }: Props) => {
  //　ーーーMoreVart用ーーー　//
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onClickMoreVart = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMoreVart = () => {
    setAnchorEl(null);
  };

  // Snackbar表示用（本削除）
  const [openSnackbarDeleteBook, setOpenSnackbarDeleteBook] = useState(false);
  const closeSnackbarDeleteBook = () => {
    setOpenSnackbarDeleteBook(false);
  };

  // 本削除関数
  const onClickDeleteBook = (index: string) => {
    deleteBook(index);
    setOpenSnackbarDeleteBook(true);
  };

  // ーーー本削除ダイアログ用ーーー //
  const [deleteDialogopen, setDeleteDialogOpen] = useState(false);

  // 本削除ダイアログ閉じる
  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  // 本削除ダイアログ開く
  const openDeleteDialog = () => {
    setDeleteDialogOpen(true);
    closeMoreVart();
  };

  const classes = useStyles();
  return (
    <div className='flex flex-col'>
      <IconButton
        aria-label='more'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={onClickMoreVart}
        className='opacity-0 group-hover:opacity-40 hover:bg-white hover:outline-none focus:outline-none'
        style={{ padding: 0 }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMoreVart}
      >
        <MenuItem onClick={openDeleteDialog}>
          <ListItemIcon classes={classes}>
            <DeleteOutlineIcon fontSize='small' />
          </ListItemIcon>
          <Typography variant='inherit'>ライブラリから本を削除</Typography>
        </MenuItem>
      </Menu>

      {deleteDialogopen && (
        <DeleteBookDialog
          open={deleteDialogopen}
          onClickDeleteBook={() => {
            onClickDeleteBook(bid);
          }}
          closeHandle={closeDeleteDialog}
          bid={bid}
        />
      )}

      <Snackbar
        open={openSnackbarDeleteBook}
        autoHideDuration={3000}
        onClose={closeSnackbarDeleteBook}
      >
        <Alert severity='info'>ライブラリから本を削除しました</Alert>
      </Snackbar>
    </div>
  );
};
export default MemoryMoreVert;
