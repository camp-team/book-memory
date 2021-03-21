import React, { useState } from 'react';
import BookCardButton from '../components/BookCardButton';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { addBook } from '../utils/book';
import { useContext } from 'react';
import { AuthContext } from '../pages/_app';

type Props = {
  bid: string;
  imgUrl: string;
  title: string;
};
// Snackbar表示用
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const BookCard = ({ bid, imgUrl, title }: Props) => {
  const currentUser = useContext(AuthContext).currentUser;
  // Snackbar表示ステイト
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  // ライブラリ登録
  const onClickAddLibrary = (uid: string) => {
    addBook(uid, bid, title, imgUrl);
    setOpenSnackbar(true);
  };

  // Amazon詳細
  const onClickAmazon = () => {};

  return (
    <div className='w-48 p-2 text-center bg-white rounded shadow hover:shadow-lg'>
      <figure className='h-36 grid justify-center align-center'>
        <img
          src={imgUrl}
          alt='Some image'
          className='max-w-xs max-h-32 object-cover'
        />
      </figure>
      <p className='p-2 h-16 font-bold text-sm mb-2 line-clamp-3'>{title}</p>
      <div className='flex flex-col'>
        <BookCardButton onClick={onClickAmazon}>Amazon詳細</BookCardButton>
        {currentUser && (
          <BookCardButton onClick={() => onClickAddLibrary(currentUser.uid)}>
            ライブラリ登録
          </BookCardButton>
        )}
      </div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={closeSnackbar}
      >
        <Alert onClose={closeSnackbar} severity='info'>
          ライブラリに登録しました
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BookCard;
