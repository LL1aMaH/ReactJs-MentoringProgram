import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'

import { MovieDetails } from '../../src/components/MovieDetails/MovieDetails';
import { NavBar } from '../../src/components/NavBar/NavBar';

import { MovieList } from '../../src/components/MovieList/MovieList';


import { getMovies, movieDetails } from '../../src/store/actions';

import { getFilms, getStartButton, getFilmsDetails } from '../../src/store/selectors';


const MovieDetailsPage = () => {
  const { activeButtonStart, sortStart } = useSelector(getStartButton);
  const [activeButton, setActiveButton] = useState(activeButtonStart);
  const [sort, setSort] = useState(sortStart);

  const dispatch = useDispatch();
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    movieDetails(id, dispatch);
    getMovies('ALL', 'RELEASE DATE', dispatch);
  }, [id]);

  const film = useSelector(getFilmsDetails);
  const movies = useSelector(getFilms);
  console.log(sort)

  const handleClick = useCallback(
    (e) => {
      setActiveButton(e.target.childNodes[0].data);
      getMovies(e.target.childNodes[0].data, sort, dispatch);
    },
    [sort],
  );

  const handleSelect = useCallback(
    (value) => {
      setSort(value);
      getMovies(activeButton, value, dispatch);
    },
    [activeButton],
  );
  return (
    <>
      <MovieDetails film={film} />
      {/* <NavBar activeButton={activeButton} handleClick={handleClick} handleSelect={handleSelect} /> */}
        <MovieList movies={movies} />
    </>
  );
};

export default MovieDetailsPage;
