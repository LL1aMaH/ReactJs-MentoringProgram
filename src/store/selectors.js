// import { TInitialState, TMovie, TStartButton } from './types';

export const getFilms = (state) => state.data;

export const getStartButton = (state) => ({
  activeButtonStart: state.genre,
  sortStart: state.sort,
});

export const getFilmsDetails = (state) => state.mainFilm;
