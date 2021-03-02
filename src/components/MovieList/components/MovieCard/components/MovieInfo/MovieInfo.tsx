import React from 'react';

import styles from './MovieInfo.css';

export type MovieCardProps = {
  title: string;
  genres: Array<string>;
  year: number | string;
};

export const MovieInfo = (props: MovieCardProps): JSX.Element => {
  const { title, genres, year } = props;
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.genres}>{genres.join(' ')}</div>
      </div>
      <div className={styles.year}>{year}</div>
    </div>
  );
};
