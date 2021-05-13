import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { MovieDetails } from 'Components/MovieDetails';
import { NavBar } from 'Components/NavBar';

import { MovieList } from 'Components/MovieList';

import ErrorBoundary from 'Components/ErrorBoundary';

import { getMovies, movieDetails } from '../../store/actions';

import { getFilms, getStartButton, getFilmsDetails } from '../../store/selectors';

type TRouteParams = {
  movieID: string;
};

const MovieDetailsPage = (): JSX.Element => {
  const { activeButtonStart, sortStart } = useSelector(getStartButton);
  const [activeButton, setActiveButton] = useState<string>(activeButtonStart);
  const [sort, setSort] = useState<string>(sortStart);

  const dispatch = useDispatch();
  const { movieID } = useParams<TRouteParams>();

  useEffect(() => {
    movieDetails(movieID, dispatch);
    getMovies(activeButton, sort, dispatch);
  }, [movieID]);

  const film = useSelector(getFilmsDetails);
  const movies = useSelector(getFilms);

  const handleClick = useCallback(
    (e) => {
      setActiveButton(e.target.childNodes[0].data);
      getMovies(e.target.childNodes[0].data, sort, dispatch);
    },
    [sort],
  );

  const handleSelect = useCallback(
    (value: string) => {
      setSort(value);
      getMovies(activeButton, value, dispatch);
    },
    [activeButton],
  );
  return (
    <>
      <MovieDetails film={film} />
      <NavBar activeButton={activeButton} handleClick={handleClick} handleSelect={handleSelect} />
      <ErrorBoundary>
        <MovieList movies={movies} />
      </ErrorBoundary>
    </>
  );
};

export default MovieDetailsPage;
