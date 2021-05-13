/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { memo, useCallback, useState, SyntheticEvent } from 'react';

import { useHistory } from 'react-router-dom';

import poster from 'Assets/pictures/Movie_040311_3.jpg';

import { DeleteMovieModal, EditMovieModal } from 'Components/Modals';
import { Button } from 'Components/Button';
import { TMovie } from 'src/store/types';

import { MovieInfo } from './components/MovieInfo';

import styles from './MovieCard.css';

export type MovieCardProps = {
  film: TMovie;
};

export const MovieCard = memo(function MovieCard({ film }: MovieCardProps): JSX.Element {
  const { poster_path: posterURL, title, genres, release_date: date } = film;

  const history = useHistory();

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const editHandleClick = useCallback(() => {
    setShowEditModal((state) => !state);
  }, []);

  const deleteHandleClick = useCallback(() => {
    setShowDeleteModal((state) => !state);
  }, []);

  const onError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/src/assets/pictures/Movie_040311_3.jpg';
  }, []);

  const redirectToMovieDetails = useCallback(() => {
    history.push(`/${film.id}`);
  }, [history, film]);

  return (
    <div className={styles.card}>
      {showEditModal && <EditMovieModal value={film} />}
      {showDeleteModal && <DeleteMovieModal id={film.id} />}

      <div className={styles.icon}>
        &#8230;
        <div className={styles.buttons}>
          <Button className={styles.button} onClick={editHandleClick} testId="Edit">
            Edit
          </Button>
          <Button className={styles.button} onClick={deleteHandleClick} testId="Delete">
            Delete
          </Button>
        </div>
      </div>
      <img
        src={posterURL || poster}
        alt="poster"
        onError={onError}
        onClick={redirectToMovieDetails}
      />
      <MovieInfo title={title} genres={genres} year={date.substr(0, 4)} />
    </div>
  );
});
