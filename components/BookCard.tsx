import React, { useState } from 'react';
import { BookCardButton } from '../components/BookCardButton';
import { addBook } from '../utils/book';

import { SnackbarComponent } from './SnackbarComponent';

type Props = {
  bid: string;
  imgUrl: string;
  title: string;
  uid?: string;
  isLibrary?: boolean;
};

export const BookCard = ({ bid, imgUrl, title, uid, isLibrary }: Props) => {
  // 「ライブラリ登録」Snackbar表示ステイト
  const [openSnackbar, setOpenSnackbar] = useState(false);
  console.log(isLibrary);
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
        {uid &&
          (isLibrary ? (
            <BookCardButton onClick={() => {}}>登録済み</BookCardButton>
          ) : (
            <BookCardButton onClick={() => addLibrary()}>
              ライブラリ登録
            </BookCardButton>
          ))}
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
