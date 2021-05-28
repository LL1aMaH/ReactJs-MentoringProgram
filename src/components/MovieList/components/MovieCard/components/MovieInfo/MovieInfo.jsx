import React from 'react';

import styles from '../../../../../../../styles/MovieInfo.module.scss'


export const MovieInfo = (props) => {
  const { title, genres, year } = props;
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p className={styles.title} id="p1">{title}</p>
        <p className={styles.genres} id="p2">{genres.join(' ')}</p>
      </div>
      <p className={styles.year}>{year}</p>
    </div>
  );
};
