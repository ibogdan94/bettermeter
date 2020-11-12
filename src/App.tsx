import React, {FC, Suspense} from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import {BrowserRouter, Switch} from 'react-router-dom';
import {ProtectedRoute, ROUTES} from 'routing';
import Auth from 'containers/Auth/Auth';
import theme from './theme';
import * as serviceWorker from './serviceWorker';
import {LocalizationProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const App: FC = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={DateFnsUtils}>
          {/*@ todo auth provider will be registered here*/}
          {/*<Auth>*/}
          <Suspense fallback={<>Loading...</>}>
            <Switch>
              {ROUTES.map(({Component, isAuth, path, ...rest}) => (
                <ProtectedRoute
                  key={path || '#'}
                  isAuth={isAuth}
                  Component={Component}
                  path={path}
                  {...rest}
                />
              ))}
            </Switch>
          </Suspense>
          {/*</Auth>*/}
        </LocalizationProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};

serviceWorker.register();

export default App;
