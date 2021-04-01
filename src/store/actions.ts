/* eslint-disable no-console */

import { DEFAULT_URL, ETypes } from 'Consts/index';
import { Dispatch } from 'redux';
import { getURL } from './helper/getURL';

const fetchMovies = () => ({
  type: 'FETCH_MOVIES_START',
});

const fetchSuccess = (payload: any) => ({
  type: 'FETCH_SUCCESS',
  payload,
});

const changeActiveButton = (payload: any) => ({
  type: 'CHANGE_ACTIVE_BUTTON',
  payload,
});

const changeSortButton = (payload: any) => ({
  type: 'CHANGE_SORT',
  payload,
});

export const getMovies = (genre: string, sort: string) => async (dispatch: Dispatch<any>) => {
  const queryString = getURL(genre, sort);
  dispatch(fetchMovies());
  try {
    const response = await fetch(queryString);
    const result = await response.json();

    dispatch(fetchSuccess(result));
    dispatch(changeActiveButton(genre));
    dispatch(changeSortButton(sort));
  } catch (error) {
    console.warn(error);
  }
};

export const deleteMovie = (id: number, activeButtonStart: string, sortStart: string) => async (
  dispatch: Dispatch<any>,
) => {
  const queryString = `${DEFAULT_URL}${ETypes.movie}/${id}`;
  try {
    const response = await fetch(queryString, { method: 'DELETE' });
    if (response.status === 204) {
      dispatch(getMovies(activeButtonStart, sortStart));
    }
  } catch (error) {
    console.warn(error);
  }
};
