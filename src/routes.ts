import MainPage from 'Views/MainPage';
import MovieDetails from 'Views/MovieDetailsPage';
import NotFoundPage from 'Views/NotFoundPage';
import SearchPage from 'Views/SearchPage';

export enum EPath {
  Main = '/',
  NotFound = '/404',
  MovieSearch = '/search/:searchValue',
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
    path: EPath.MovieSearch,
    component: SearchPage,
    exact: true,
  },
  {
    path: EPath.MovieDetailsPage,
    component: MovieDetails,
    exact: false,
  },
  {
    path: EPath.NotFound,
    component: NotFoundPage,
    exact: false,
  },
];
