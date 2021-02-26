import * as React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

type Props = {
  onFunctions: VoidFunction[];
  children: string[];
};

const MoreVer = ({ onFunctions, children }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        {onFunctions &&
          onFunctions.map((onFunction, idx) => (
            <div key={idx}>
              <MenuItem onClick={onFunction}>{children[idx]}</MenuItem>
            </div>
          ))}
      </Menu>
    </div>
  );
};
export default MoreVer;
