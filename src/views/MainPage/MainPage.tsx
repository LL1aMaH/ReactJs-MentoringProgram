import React, { useCallback, useEffect, useState } from 'react';

import { NavBar } from 'Components/NavBar';
import { Preview } from 'Components/Preview';

import { MovieList } from 'Components/MovieList';

import ErrorBoundary from 'Components/ErrorBoundary';

import { useDispatch, useSelector } from 'react-redux';

import { getMovies } from '../../store/actions';

import { getFilms, getStartButton } from '../../store/selectors';

const MainPage = (): JSX.Element => {
  const { activeButtonStart, sortStart } = useSelector(getStartButton);
  const [activeButton, setActiveButton] = useState<string>(activeButtonStart);
  const [sort, setSort] = useState<string>(sortStart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies(activeButton, sort));
  }, []);

  const movies = useSelector(getFilms);

  const handleClick = useCallback(
    (e) => {
      setActiveButton(e.target.childNodes[0].data);
      dispatch(getMovies(e.target.childNodes[0].data, sort));
    },
    [sort],
  );

  const handleSelect = useCallback(
    (value: string) => {
      setSort(value);
      dispatch(getMovies(activeButton, value));
    },
    [activeButton],
  );
  return (
    <>
      <Preview />
      <NavBar activeButton={activeButton} handleClick={handleClick} handleSelect={handleSelect} />
      <ErrorBoundary>
        <MovieList movies={movies} />
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
