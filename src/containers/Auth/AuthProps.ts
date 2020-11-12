import {USER} from 'interfaces';

export interface AuthPropsI {
  readonly InjectedProps: {
    user: USER | null;
    authorized: boolean;

    login: (payload: any) => void;
    logout: () => void;
  };
}
