import React from 'react';

import poster from 'Assets/pictures/Movie_040311_3.jpg';

import { MovieInfo } from './components/MovieInfo';

import styles from './MovieCard.css';

export type MovieCardProps = {
  title: string;
  genres: Array<string>;
  year: number | string;
  posterURL?: string;
};

export const MovieCard = (props: MovieCardProps): JSX.Element => {
  const { title, genres, year, posterURL } = props;
  return (
    <div className={styles.card}>
      <img src={posterURL || poster} alt="poster" />
      <MovieInfo title={title} genres={genres} year={year} />
    </div>
  );
};
