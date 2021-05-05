import MainPage from 'Views/MainPage';
import MovieDetails from 'Views/MovieDetailsPage';
import NotFoundPage from 'Views/NotFoundPage';

export enum EPath {
  Main = '/',
  NotFound = '/404',
  MovieDetailsPage = '/:movieID',
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
  {
    path: EPath.MovieDetailsPage,
    component: MovieDetails,
    exact: false,
  },
];
