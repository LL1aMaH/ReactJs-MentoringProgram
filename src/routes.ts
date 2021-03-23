import NotFoundPage from 'Views/NotFoundPage';

import MainPage from 'Views/MainPage';

export enum EPath {
  Main = '/',
  NotFound = '/404',
}

type TRoute = {
  path: EPath;
  component: () => JSX.Element;
  exact: boolean;
};

export const ROUTES: TRoute[] = [
  {
    path: EPath.Main,
    component: MainPage,
    exact: true,
  },
  {
    path: EPath.NotFound,
    component: NotFoundPage,
    exact: false,
  },
];
