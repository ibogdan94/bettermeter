import {lazy} from 'react';
const MainPage = lazy(() => import('pages/Main'));

export enum PATH {
  main = '/',
}

export const ROUTES = [{isAuth: false, path: PATH.main, Component: MainPage}];
