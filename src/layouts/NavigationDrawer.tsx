import React, {FC, useEffect} from 'react';
import {
  Drawer,
  withStyles,
  withWidth,
  isWidthUp,
  Toolbar,
} from '@material-ui/core';

const styles = (theme): {[key: string]: any} => ({
  closeIcon: {
    marginRight: theme.spacing(0.5),
  },
  headSection: {
    width: '100%',
    backgroundColor: '#F4F6FA',
  },
  blackList: {
    backgroundColor: '#C4C4C4',
    height: '100%',
  },
  noDecoration: {
    textDecoration: 'none !important',
  },
  drawerMobilePaper: {
    display: 'block',
    height: '100vh',
    border: 0,
    width: '100%',
    maxWidth: '280px',
    overflowX: 'hidden',
    overflowY: 'auto',
    marginTop: 0,
    backgroundColor: '#F4F6FA',
    padding: '30px 15px',
  },
  menuItemStyles: {
    padding: '5px 30px',
  },
});

interface NavigationDrawerPropsI {
  open: boolean;
  onClose: () => void;
  anchor: 'bottom' | 'left' | 'right' | 'top';
  menuItems: Array<JSX.Element>;
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  classes?: {[key: string]: any};
}
const NavigationDrawer: FC<NavigationDrawerPropsI> = ({
  width,
  open,
  onClose,
  anchor,
  classes,
  menuItems,
}): JSX.Element => {
  useEffect(() => {
    window.onresize = (): void => {
      if (isWidthUp('sm', width) && open) {
        onClose();
      }
    };
  }, [width, open, onClose]);

  return (
    <Drawer
      variant="temporary"
      classes={{
        paper: classes.drawerMobilePaper,
      }}
      open={open}
      onClose={onClose}
      anchor={anchor}>
      <Toolbar className={classes.headSection}>
        <div className="brand-holder">
          <span onClick={onClose} aria-label="Close Navigation">
            <img src="" alt="" />
          </span>
        </div>
      </Toolbar>
      <div className="menu-wrapper">{menuItems}</div>
    </Drawer>
  );
};

export default withWidth()(
  withStyles(styles, {withTheme: true})(NavigationDrawer),
);
