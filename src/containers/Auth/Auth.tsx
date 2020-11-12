import React, {FC, useReducer, useEffect, useCallback} from 'react';
import {AuthContext} from './AuthContext';
import {CredentialsManager} from 'security';

// todo: add types!
enum AUTH_ACTION {
  login = 'login',
  logout = 'logout',
}

const initialState = {
  user: null,
  authorized: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACTION.login:
      CredentialsManager.setCredentials({
        token: action.payload.token,
        user: action.payload.user,
      });
      return {
        user: action.payload.user,
        authorized: true,
      };
    case AUTH_ACTION.logout:
      CredentialsManager.removeCredentials();
      return {...initialState};
    default:
      throw new Error();
  }
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({children}) => {
  const getInitialState = (): {authorized: boolean; user: null | any} => {
    const user = CredentialsManager.getCredentials();
    if (user) return {user, authorized: true};
    return initialState;
  };
  const [state, dispatch] = useReducer(reducer, getInitialState());

  useEffect(() => {
    const credentials = CredentialsManager.getCredentials();
    if (credentials && credentials.token) {
      dispatch({type: AUTH_ACTION.login, payload: credentials});
    }
  }, []);

  const getChildrenProps = () => ({
    ...state,
    login,
    logout,
  });

  const login = useCallback((authInfo) => {
    dispatch({type: AUTH_ACTION.login, payload: authInfo});
  }, []);

  const logout = useCallback(() => {
    dispatch({type: AUTH_ACTION.logout});
  }, []);

  return (
    <AuthContext.Provider value={getChildrenProps()}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
