import React, {FC} from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';

const MoreActions: FC = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <img src="./images/dot.svg" alt="" />
      </Button>
      <Menu
        id="simple-menu"
        className="light-bg"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose} disabled>
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose}>Refresh</MenuItem>
      </Menu>
    </div>
  );
};

export default MoreActions;
