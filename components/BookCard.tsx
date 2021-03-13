import React, { SyntheticEvent, useState } from 'react';
import BookCardButton from '../components/BookCardButton';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { addBook } from '../utils/book';

type Props = {
  bid: string;
  imgUrl: string;
  title: string;
};
// Snacbar表示用↓
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
// Snacbar表示用↑

const BookCard = ({ bid, imgUrl, title }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const onClickAddLibrary = () => {
    addBook(bid, title, imgUrl);
    setOpen(true);
  };
  const onClickAmazon = () => {};
  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className='w-44 p-2 text-center box-border bg-white rounded shadow hover:shadow-md duration-4 md:w-48'>
      <figure className='h-36 grid justify-center align-center'>
        <img
          src={imgUrl}
          alt='Some image'
          className='max-w-xs max-h-32 object-cover'
        />
      </figure>
      <p className='p-2 h-16 font-bold text-sm mb-2 truncate'>{title}</p>
      <div className='flex flex-col'>
        <BookCardButton buttoncolor='yellow' onClick={onClickAmazon}>
          Amazon詳細
        </BookCardButton>
        <BookCardButton buttoncolor='blue' onClick={onClickAddLibrary}>
          ライブラリ登録
        </BookCardButton>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='info'>
          ライブラリに登録しました
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BookCard;
