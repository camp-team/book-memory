import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  buttoncolor: string;
};

const BookCardButton = ({ children, buttoncolor }: Props) => (
  <div className="flex flex-col">
    <button
      className={
        "bg-" +
        `${buttoncolor}` +
        "-400 text-white font-bold p-2 text-xs shadow rounded"
      }
    >
      {children}
    </button>
  </div>
);

export default BookCardButton;
