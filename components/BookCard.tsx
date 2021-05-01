import React, { useState } from 'react';
import BookCardButton from '../components/BookCardButton';
import { addBook } from '../utils/book';
import { fuego } from '../utils/firebase';
import { SnackbarComponent } from './SnackbarComponent';

type Props = {
  bid: string;
  imgUrl: string;
  title: string;
};

const BookCard = ({ bid, imgUrl, title }: Props) => {
  const currentUser = fuego.auth().currentUser;
  // 「ライブラリ登録」Snackbar表示ステイト
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // ライブラリ登録
  const addLibrary = () => {
    addBook(bid, title, imgUrl);
    setOpenSnackbar(true);
  };

  return (
    <div className="w-40 md:w-48 mx-auto p-2 text-center bg-blue-50 rounded-md">
      <figure className="h-36 grid justify-center align-center">
        <img
          src={imgUrl}
          alt="Some image"
          className="max-w-xs max-h-32 object-cover"
        />
      </figure>
      <p className="p-2 h-16 font-bold text-sm mb-2 line-clamp-3">{title}</p>
      <div className="flex flex-col">
        {currentUser && (
          <BookCardButton onClick={() => addLibrary()}>
            ライブラリ登録
          </BookCardButton>
        )}
      </div>
      <SnackbarComponent
        open={openSnackbar}
        close={() => setOpenSnackbar(false)}
        severity="info"
      >
        ライブラリに登録しました
      </SnackbarComponent>
    </div>
  );
};

export default BookCard;
