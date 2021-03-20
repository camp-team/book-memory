import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  buttoncolor: string;
  onClick: any;
};

const BookCardButton = ({ children, buttoncolor, onClick }: Props) => (
  <div className='flex flex-col'>
    <button
      className={
        'bg-' +
        `${buttoncolor}` +
        '-400 text-white font-bold p-2 text-xs shadow rounded focus:outline-none'
      }
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

export default BookCardButton;
