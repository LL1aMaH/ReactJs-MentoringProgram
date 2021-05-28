import React, { memo } from 'react';

import styles from '../../../styles/MovieList.module.scss'

import { MovieCard } from './components/MovieCard/MovieCard';


export const MovieList = memo(function MovieList({ movies }) {
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
