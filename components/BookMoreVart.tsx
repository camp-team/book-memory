import React, { MouseEvent, useState, memo } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ListItemIcon } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { DeleteBookDialog } from '../components/DeleteBookDialog';

type Props = {
  bid: string;
};

//Morevartメニューバー用
const useStyles = makeStyles({
  root: {
    minWidth: 32,
  },
});

export const BookMoreVert = memo(({ bid }: Props) => {
  //　ーーーMoreVart用ーーー　//
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // ーーー本削除ダイアログ用ーーー //
  const [deleteDialogopen, setDeleteDialogOpen] = useState(false);

  // 本削除ダイアログ開く
  const openDeleteDialog = () => {
    setDeleteDialogOpen(true);
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <div className="flex flex-col">
      <IconButton
        aria-label="more"
        aria-controls="simple-book"
        aria-haspopup="true"
        onClick={(event: MouseEvent<HTMLButtonElement>) =>
          setAnchorEl(event.currentTarget)
        }
        className="opacity-0 group-hover:opacity-40 hover:bg-white hover:outline-none focus:outline-none"
        style={{ padding: 0 }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-book"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={openDeleteDialog}>
          <ListItemIcon classes={classes}>
            <DeleteOutlineIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">ライブラリから本を削除</Typography>
        </MenuItem>
      </Menu>

      {deleteDialogopen && (
        <DeleteBookDialog
          open={deleteDialogopen}
          handleClose={() => setDeleteDialogOpen(false)}
          bid={bid}
        />
      )}
    </div>
  );
});
