import React, { ChangeEvent, MouseEvent, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ListItemIcon } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { addMemory } from '../utils/memory';
import EditMemoryDialog from './EditMemoryDialog';
import { useRouter } from 'next/router';

type Props = {
  bid: string;
  memoryIndex: number;
  memories: string[];
  onWelcomeUpdateMemory: any;
};

const useStyles = makeStyles({
  root: {
    minWidth: 32,
  },
});

const MemoryMoreVert = ({
  bid,
  memoryIndex,
  memories,
  onWelcomeUpdateMemory,
}: Props) => {
  const router = useRouter();
  //　ーーーMoreVart用ーーー　//
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const onClickMoreVart = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMoreVart = () => {
    setAnchorEl(null);
  };
  // ーーー編集ダイアログ用ーーー //
  const [editDialogopen, setEditDialogOpen] = useState(false);
  // 編集ダイアログ閉じる
  const onClickDialogClose = () => {
    setEditInput(memories[memoryIndex]);
    setEditDialogOpen(false);
  };
  // 編集ダイアログ開く
  const onClickEditDialogOpen = () => {
    setEditDialogOpen(true);
    closeMoreVart();
  };
  // 編集ダイアログの入力ステート
  const [editInput, setEditInput] = useState(memories[memoryIndex]);
  // 編集ダイアログのメモリー入力中関数
  const onChangeEditMemory: any = (event: ChangeEvent<HTMLInputElement>) => {
    setEditInput(event.target.value);
  };
  // メモリー更新関数
  const onClickEditMemory = (index: number) => {
    if (editInput === '') return;
    memories[index] = editInput;
    router.pathname === '/library'
      ? addMemory(bid, memories)
      : onWelcomeUpdateMemory(memories);
    setEditInput(memories[memoryIndex]);
    setEditDialogOpen(false);
  };

  // メモリー削除関数
  const onClickDeleteMemory = (index: number) => {
    memories.splice(index, 1);
    router.pathname === '/library'
      ? addMemory(bid, memories)
      : onWelcomeUpdateMemory(memories);
    closeMoreVart();
  };
  const classes = useStyles();
  return (
    <div className='flex flex-col'>
      <IconButton
        aria-label='more'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={onClickMoreVart}
        className='opacity-0 group-hover:opacity-40 hover:bg-white hover:outline-none focus:outline-none'
        style={{ padding: 0 }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMoreVart}
      >
        <MenuItem onClick={() => onClickEditDialogOpen()}>
          <ListItemIcon classes={classes}>
            <EditOutlinedIcon fontSize='small' />
          </ListItemIcon>
          <Typography variant='inherit'>編集</Typography>
        </MenuItem>
        <MenuItem onClick={() => onClickDeleteMemory(memoryIndex)}>
          <ListItemIcon classes={classes}>
            <DeleteOutlineIcon fontSize='small' />
          </ListItemIcon>
          <Typography variant='inherit'>削除</Typography>
        </MenuItem>
      </Menu>

      {editDialogopen && (
        <EditMemoryDialog
          open={editDialogopen}
          onClickEditMemory={onClickEditMemory}
          onChangeEditMemory={onChangeEditMemory}
          closeHandle={onClickDialogClose}
          editInput={editInput}
          memoryIndex={memoryIndex}
        />
      )}
    </div>
  );
};
export default MemoryMoreVert;
