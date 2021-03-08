import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useContext, useState } from 'react';
import { AuthContext } from '../pages/_app';
import Router from 'next/router';
import { auth } from '../utils/firebase';

const useStyles = makeStyles({
  root: {
    minWidth: 32,
  },
});
const MenuVar = () => {
  const currentUser = useContext(AuthContext).currentUser;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickMyLibrary = () => {
    Router.push('/library');
  };
  const onClickUserSetting = () => {
    Router.push('/setting');
  };
  const onClickLogout = () => {
    Router.push('/');
    auth.signOut();
  };

  const classes = useStyles();

  return (
    <div>
      <button
        className='focus:outline-none'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <img
          src={currentUser?.photoURL || 'https://picsum.photos/100/100'}
          alt='Some image'
          className='ml-4 rounded-full h-9 w-9 flex items-center justify-center'
        />
      </button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onClickMyLibrary}>
          <ListItemIcon classes={classes}>
            <LibraryBooksIcon fontSize='small' />
          </ListItemIcon>
          <Typography variant='inherit'>マイライブラリ</Typography>
        </MenuItem>
        <MenuItem onClick={onClickUserSetting}>
          <ListItemIcon classes={classes}>
            <SettingsIcon fontSize='small' />
          </ListItemIcon>
          <Typography variant='inherit'>ユーザー設定</Typography>
        </MenuItem>
        <MenuItem onClick={onClickLogout}>
          <ListItemIcon classes={classes}>
            <ExitToAppIcon fontSize='small' />
          </ListItemIcon>
          <Typography variant='inherit' noWrap>
            ログアウト
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};
export default MenuVar;
