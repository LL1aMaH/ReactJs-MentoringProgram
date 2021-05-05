import { TInitialState, TMovie, TStartButton } from './types';

export const getFilms = (state: TInitialState): TMovie[] => state.data;

export const getStartButton = (state: TInitialState): TStartButton => ({
  activeButtonStart: state.genre,
  sortStart: state.sort,
});

export const getFilmsDetails = (state: TInitialState): TMovie | null => state.mainFilm;
