import React from 'react';

import { MovieCard } from './components/MovieCard';

import styles from './MovieList.css';

export const MovieList = (): JSX.Element => {
  const Film = Array(20)
    .fill({
      title: 'Pulp Fiction',
      genres: ['Drama', 'Music', 'Oscar winning Movie'],
      year: 1912,
    })
    .map(({ title, genres, year }, index) => {
      const key = index;
      return <MovieCard title={title} genres={genres} year={year} key={key} />;
    });

  return (
    <div className={styles.container}>
      <span>{Film.length} movies found</span>
      <div className={styles.list}>{Film}</div>;
    </div>
  );
};
