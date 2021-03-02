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
        <p className={styles.title}>{title}</p>
        <p className={styles.genres}>{genres.join(' ')}</p>
      </div>
      <p className={styles.year}>{year}</p>
    </div>
  );
};
