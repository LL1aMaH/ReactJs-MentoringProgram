import React, { memo } from 'react';

import { MovieCard } from './components/MovieCard';
import { TMovie } from '../../store/types';

import styles from './MovieList.css';

export type TMovieList = {
  movies: TMovie[];
};

export const MovieList = memo(function MovieList({ movies }: TMovieList): JSX.Element {
  const films = movies.map((film, i) => {
    const key = i;
    return <MovieCard key={key} film={film} />;
  });

  return (
    <div className={styles.container}>
      <span>{films.length} movies found</span>
      <div className={styles.list}>{films}</div>;
    </div>
  );
});
