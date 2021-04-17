import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: any;
};

const BookCardButton = ({ children, onClick }: Props) => (
  <div className="flex flex-col">
    <button
      className={
        children === 'Amazon詳細'
          ? 'bg-yellow-400 text-white font-bold p-2 text-xs shadow rounded focus:outline-none'
          : 'bg-blue-400 text-white font-bold p-2 text-xs shadow rounded focus:outline-none'
      }
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

export default BookCardButton;
