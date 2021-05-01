import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { fuego } from '../utils/firebase';

const useStyles = makeStyles({
  root: {
    minWidth: 40,
  },
});
export const MenuVar = () => {
  const currentUser = fuego.auth().currentUser;
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // サインアウト処理
  const logout = () => {
    router.push('/');
    fuego.auth().signOut();
  };
  const classes = useStyles();
  return (
    <>
      <button
        className="focus:outline-none"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
          setAnchorEl(event.currentTarget);
        }}
      >
        <img
          src={currentUser?.photoURL || 'https://picsum.photos/100/100'}
          alt="Some image"
          className="ml-4 rounded-full h-9 w-9 flex items-center justify-center"
        />
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem
          onClick={() => {
            router.push('/library');
          }}
        >
          <ListItemIcon classes={classes}>
            <LibraryBooksIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">マイライブラリ</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push('/setting');
          }}
        >
          <ListItemIcon classes={classes}>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">ユーザー設定</Typography>
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon classes={classes}>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            ログアウト
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
