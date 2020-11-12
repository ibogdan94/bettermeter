import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import Main from 'layouts/Main';
import {PATH} from './routeConfigs';
import {AuthContext} from 'containers/Auth';

type ProtectedRouteProps = {
  Component: React.ComponentType<any>;
  isAuth?: boolean;
  key: string;
  path: PATH;
  exact?: boolean;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  Component,
  isAuth,
  ...rest
}) => {
  // @todo can use auth logic here
  // const {authorized} = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={
        ({location}): JSX.Element => (
          <Main route={location.pathname}>
            <Component />
          </Main>
        )
        // @todo like this
        // typeof isAuth !== 'boolean' || isAuth === !!authorized ? (
        //   isAuth ? (
        //     <Main route={location.pathname}>
        //       <Component />
        //     </Main>
        //   ) : (
        //     <Component />
        //   )
        // ) : (
        //   <Redirect
        //     exact={rest.exact}
        //     key={rest.key}
        //     to={{
        //       pathname: PATH.main,
        //       state: {from: location},
        //     }}
        //   />
        // )
      }
    />
  );
};
