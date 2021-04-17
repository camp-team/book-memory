import React, { useState } from 'react';
import DeleteUserDialog from '../components/DeleteUserDialog';
type Props = {
  title: string;
  contents: string;
};

const SettingComponent = ({ title, contents }: Props) => {
  // ーーー編集ダイアログ用ーーー //
  const [deleteUserDialogopen, setDeleteUserDialogOpen] = useState(false);
  // 退会ダイアログ閉じる
  const onClickDialogClose = () => {
    setDeleteUserDialogOpen(false);
  };
  // 退会ダイアログ開く
  const onClickEditDialogOpen = () => {
    setDeleteUserDialogOpen(true);
  };

  return (
    <div className="py-8 border-b-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-6">{contents}</p>
      {title === '退会' && (
        <button
          className="mt-4 px-4 py-2 border rounded-md shadow text-sm text-black focus:* focus:outline-none"
          onClick={onClickEditDialogOpen}
        >
          退会する
        </button>
      )}
      {onClickDialogClose && (
        <DeleteUserDialog
          open={deleteUserDialogopen}
          handelClick={onClickDialogClose}
        ></DeleteUserDialog>
      )}
    </div>
  );
};

export default SettingComponent;
