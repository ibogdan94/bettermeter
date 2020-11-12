import React, {FC, useEffect, useRef, useState} from 'react';

import {
  Drawer,
  List,
  IconButton,
  ListItem,
  withStyles,
  withWidth,
  MenuItem,
  Badge,
  Avatar,
  createStyles,
  Theme,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  ListItemText,
} from '@material-ui/core';

const styles = (theme): {[key: string]: any} => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor: theme.palette.common.white,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginLeft: 0,
    },
  },
  accountAvatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 24,
    width: 24,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5),
    },
  },
  toolbarStyles: {
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 'auto',
    paddingLeft: '0',
    paddingRight: '0',
  },
  drawerPaper: {
    height: '100vh',
    border: 0,
    width: '100%',
    maxWidth: '300px',
    overflowX: 'hidden',
    overflowY: 'auto',
    marginTop: 0,
    backgroundColor: '#F4F6FA',
    padding: '30px 15px',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      maxWidth: '260px',
      padding: '30px 15px',
    },
    [theme.breakpoints.up('md')]: {
      width: '100%',
      maxWidth: '300px',
      padding: '30px 15px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100%',
      maxWidth: '300px',
      padding: '30px 15px',
    },
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  iconListItem: {
    width: 'auto',
    borderRadius: theme.shape.borderRadius,
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  textPrimary: {
    color: theme.palette.primary.main,
  },
  mobileItemSelected: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
  username: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2),
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  permanentDrawerListItem: {
    padding: '5px 30px',
    borderBottom: 'none',
  },
  avatarDefault: {
    width: '32px',
    height: '32px',
    fontSize: '13px',
    backgroundColor: '#808080',
  },
  avatarLarge: {
    width: '60px',
    height: '60px',
    fontSize: '18px',
  },
  avatarDark: {
    backgroundColor: '#808080',
  },
});

interface NavBarPropsI {
  route: string;
  messages?: Array<string>;
  classes?: {[key: string]: any};
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 8,
      border: '3px solid #101010',
      padding: '0 2px',
      backgroundColor: '#FF5C00',
      fontSize: '12px',
      color: '#F6F6F6',
    },
  }),
)(Badge);

const NavBar: FC<NavBarPropsI> = (props): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef?.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>): void => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const handleDrawerOpen = (): void => {
    setOpenMenu(true);
  };

  const handleDrawerClose = (): void => {
    setOpenMenu(false);
  };

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="burger-menu">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}>
              <img src="./images/burger-btn.svg" alt="" />
            </IconButton>
          </div>
          <a href="/" className="logo">
            <img src="./images/full-logo.svg" alt="BetterMeter" />
          </a>
          <ul className="header-nav-list">
            <li className="search-item">
              <IconButton aria-label="search">
                <img src="./images/search.svg" alt="search" />
              </IconButton>
            </li>
            <li>
              <IconButton aria-label="notification">
                <StyledBadge badgeContent={9} color="secondary">
                  <img src="./images/notification.svg" alt="notification" />
                </StyledBadge>
              </IconButton>
            </li>
            <li>
              <div>
                <Button
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  className="username-btn">
                  <Avatar alt="Adrian Villa" src="./images/avatar.jpg" />
                  <span className="user-name">Adrian Villa</span>
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal>
                  {({TransitionProps, placement}) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom'
                            ? 'center top'
                            : 'center bottom',
                      }}>
                      <Paper className="dropdown-menu">
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}>
                            <MenuItem onClick={handleClose}>
                              Menu Item 1
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              Menu Item 2
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </li>
          </ul>
        </div>
      </header>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item active">
            <a href="#">
              <img src="./images/dashboard.svg" alt="" />
              Dashboard
            </a>
          </li>
          <li className="navbar-item">
            <a href="#">
              <img src="./images/sites.svg" alt="" />
              Sites
            </a>
          </li>
          <li className="navbar-item">
            <a href="#">
              <img src="./images/campaigns.svg" alt="" />
              Campaigns
            </a>
          </li>
          <li className="navbar-item">
            <a href="#">
              <img src="./images/analytics.svg" alt="" />
              Analytics
            </a>
          </li>
          <li className="navbar-item">
            <a href="#">
              <img src="./images/live-view.svg" alt="" />
              Live View
            </a>
          </li>
          <li className="navbar-item">
            <a href="#">
              <img src="./images/users.svg" alt="" />
              Users
            </a>
          </li>
          <li className="navbar-item">
            <a href="#">
              <img src="./images/organizations.svg" alt="" />
              Organizations
            </a>
          </li>
          <li className="navbar-item">
            <a href="#">
              <img src="./images/settings.svg" alt="" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
      <Drawer
        className="mobile-menu"
        variant="persistent"
        anchor="left"
        open={openMenu}>
        <div>
          <IconButton className="burger-close" onClick={handleDrawerClose}>
            <img src="./images/burger-btn.svg" alt="" />
          </IconButton>
        </div>
        <List>
          {[
            'Dashboard',
            'Sites',
            'Campaigns',
            'Analytics',
            'Live View',
            'Users',
            'Organizations',
            'Settings',
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default withWidth()(withStyles(styles, {withTheme: true})(NavBar));
