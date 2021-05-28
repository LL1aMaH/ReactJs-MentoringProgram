import { DEFAULT_URL } from '../consts/const';
// import { Dispatch } from 'redux';

import { getURL } from './helper/getURL';

// import { TAddMovie } from './types';

export const fetchMovies = () => ({
  type: 'FETCH_MOVIES_START',
});

export const fetchSuccess = (payload) => ({
  type: 'FETCH_SUCCESS',
  payload,
});

const changeActiveButton = (payload) => ({
  type: 'CHANGE_ACTIVE_BUTTON',
  payload,
});

const changeSortButton = (payload) => ({
  type: 'CHANGE_SORT',
  payload,
});

const changeMainFilm = (payload) => ({
  type: 'CHANGE_MAIN_FILM',
  payload,
});

export const getMovies = async (genre, sort, dispatch) => {
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

export const getSearchMovies = async (value, dispatch) => {
  const queryString = `${DEFAULT_URL}?search=${value}&searchBy=title`;
  try {
    const response = await fetch(queryString);
    const result = await response.json();
    dispatch(fetchSuccess(result));
    dispatch(changeActiveButton('ALL'));
    dispatch(changeSortButton('RELEASE DATE'));
  } catch (error) {
    console.warn(error);
  }
};

export const deleteMovie = async (
  id,
  activeButtonStart,
  sortStart,
  dispatch,
) => {
  const queryString = `${DEFAULT_URL}/${id}`;
  try {
    const response = await fetch(queryString, { method: 'DELETE' });
    if (response.status === 204) {
      getMovies(activeButtonStart, sortStart, dispatch);
    }
  } catch (error) {
    console.warn(error);
  }
};

export const addMovie = async (
  values,
  activeButtonStart,
  sortStart,
  dispatch,
) => {
  const queryString = `${DEFAULT_URL}`;
  try {
    const response = await fetch(queryString, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    if (response.status === 201) {
      getMovies(activeButtonStart, sortStart, dispatch);
    }
  } catch (error) {
    console.warn(error);
  }
};

export const editMovie = async (
  values,
  activeButtonStart,
  sortStart,
  dispatch,
) => {
  const queryString = `${DEFAULT_URL}`;
  try {
    const response = await fetch(queryString, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    if (response.status === 200) {
      getMovies(activeButtonStart, sortStart, dispatch);
    }
  } catch (error) {
    console.warn(error);
  }
};

export const movieDetails = async (id, dispatch) => {
  const queryString = `${DEFAULT_URL}/${id}`;
  try {
    const response = await fetch(queryString);
    if (response.status === 200) {
      const result = await response.json();
      dispatch(changeMainFilm(result));
    }
  } catch (error) {
    console.warn(error);
  }
};
