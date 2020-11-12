import {createContext} from 'react';
import {AuthPropsI} from './AuthProps';

export const AuthContext = createContext<AuthPropsI['InjectedProps']>({
  user: null,
  authorized: false,
  login: async () => false,
  logout: async () => undefined,
});
