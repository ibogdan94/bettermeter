import React, {FC, memo} from 'react';
import {withStyles} from '@material-ui/core';
import NavBar from './NavBar';

const styles = (theme): {[key: string]: any} => ({
  main: {
    marginLeft: 0,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('sm')]: {
      marginLeft: '260px',
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '300px',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '300px',
    },
  },
});

// @ts-ignore
interface MainPropsI {
  children: React.ReactNode;
  classes?: {[key: string]: any};
  route?: string;
}

const Main: FC<MainPropsI> = ({route, classes, children}): JSX.Element => (
  <div id="wrapper">
    <NavBar route={route} />
    <main id="main">{children}</main>
  </div>
);

export default withStyles(styles, {withTheme: true})(memo(Main));
