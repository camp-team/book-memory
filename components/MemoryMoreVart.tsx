import React, { MouseEvent, useEffect, useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ListItemIcon } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useMemory, addMemory } from '../utils/memory';

type Props = {
  bid: string;
  memoryIndex: number;
  memory: string;
};

const useStyles = makeStyles({
  root: {
    minWidth: 32,
  },
});

const MemoryMoreVert = ({ bid, memoryIndex, memory }: Props) => {
  const memories = useMemory(bid);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClickEditMemory = () => {};
  const onClickDeleteMemory = (index: number) => {
    memories.splice(index, 1);
    addMemory(bid, memories);
    handleClose();
  };
  const classes = useStyles();
  return (
    <div className='ml-2 flex flex-col'>
      <IconButton
        aria-label='more'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
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
        onClose={handleClose}
      >
        <MenuItem onClick={onClickEditMemory}>
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
    </div>
  );
};
export default MemoryMoreVert;
