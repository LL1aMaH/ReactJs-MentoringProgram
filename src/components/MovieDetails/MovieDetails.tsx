import React, { memo, SyntheticEvent, useCallback } from 'react';

import { Logo } from 'Components/Logo';

import { TMovie } from 'src/store/types';
import poster from 'Assets/pictures/Movie_040311_3.jpg';

import styles from './MovieDetails.css';

export type TMovieDetailsProps = {
  film: TMovie | null;
};

export const MovieDetails = memo(function Preview({ film }: TMovieDetailsProps): JSX.Element {
  const onError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/src/assets/pictures/Movie_040311_3.jpg';
  }, []);
  return (
    <>
      <div
        className={styles.preview}
        style={{
          backgroundImage: 'url(/src/Assets/pictures/cover-image.jpg)',
          filter: 'blur(5px)',
        }}
      />
      <div className={styles.previewContent}>
        <div className={styles.buttons}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.info}>
            <img src={film?.poster_path || poster} alt="poster" onError={onError} />
            <div className={styles.infoMovie}>
              <div className={styles.titleWithRating}>
                <h1>{film?.title}</h1>
                {!!film?.vote_average && <div className={styles.circle}>{film.vote_average}</div>}
              </div>
              <p>
                <span>{film?.release_date.slice(0, 4)}</span>
                <span>{film?.runtime && `${film.runtime} min`}</span>
              </p>
              <p className={styles.overview}>{film?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
