import React from "react";
import BookCardButton from "../components/BookCardButton";

const BookCard = () => (
  <div className="bg-white rounded w-1/8 shadow hover:shadow-md duration-4">
    <div className="p-2 text-grey-darker text-justify flex flex-col">
      <img
        src="https://picsum.photos/200/250"
        alt="Some image"
        className="w-32 flex self-center shadow-lg mb-4"
      />

      <p className="font-bold text-sm uppercase mb-2 text-blue-darker">
        本のタイトル
      </p>
      <div className="flex flex-col">
        <BookCardButton buttoncolor="yellow">Amazon詳細</BookCardButton>
        <BookCardButton buttoncolor="blue">ライブラリ登録</BookCardButton>
      </div>
    </div>
  </div>
);

export default BookCard;
