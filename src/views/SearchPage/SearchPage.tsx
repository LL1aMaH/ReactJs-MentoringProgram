import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ErrorBoundary from 'Components/ErrorBoundary';
import { MovieList } from 'Components/MovieList';
import { Preview } from 'Components/Preview';

import { getFilms } from '../../store/selectors';
import { getSearchMovies } from '../../store/actions';

type TRouteParams = {
  searchValue: string;
};

const SearchPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const { searchValue } = useParams<TRouteParams>();

  useEffect(() => {
    getSearchMovies(searchValue, dispatch);
  }, [searchValue]);

  const movies = useSelector(getFilms);

  return (
    <>
      <Preview searchValue={searchValue} />
      <ErrorBoundary>
        <MovieList movies={movies} />
      </ErrorBoundary>
    </>
  );
};

export default SearchPage;
