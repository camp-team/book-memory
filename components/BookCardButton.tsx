import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: VoidFunction;
};

export const BookCardButton = ({ children, onClick }: Props) => (
  <div className="flex flex-col">
    {children === '登録済み' ? (
      <button
        className={
          'bg-gray-400 text-white font-bold p-2 text-xs rounded focus:outline-none'
        }
        onClick={onClick}
        disabled={true}
      >
        {children}
      </button>
    ) : (
      <button
        className={
          children === 'Amazon詳細'
            ? 'bg-yellow-400'
            : 'bg-blue-400' +
              ' text-white font-bold p-2 text-xs shadow rounded focus:outline-none hover:shadow-md'
        }
        onClick={onClick}
      >
        {children}
      </button>
    )}
  </div>
);
