import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export default function ControlledTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Tooltip
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      className="custom-tooltip"
      placement="top"
      title={
        <div className="tooltip-text">
          <p className="tooltip-heading">
            <img src="./images/warning-white.svg" alt="" />
            Pageviews
          </p>
          <p className="subtext">
            an instance of a user visiting a particular page on a website.
          </p>
        </div>
      }>
      <img src="./images/warning.svg" alt="" />
    </Tooltip>
  );
}
