import React, { useCallback, useState } from 'react';

import poster from 'Assets/pictures/Movie_040311_3.jpg';

import { DeleteMovieModal, EditMovieModal } from 'Components/Modals';
import { Button } from 'Components/Button';
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
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const editHandleClick = useCallback(() => {
    setShowEditModal((state) => !state);
  }, []);

  const deleteHandleClick = useCallback(() => {
    setShowDeleteModal((state) => !state);
  }, []);

  return (
    <div className={styles.card}>
      {showEditModal && <EditMovieModal />}
      {showDeleteModal && <DeleteMovieModal />}
      <div className={styles.icon}>
        &#8230;
        <div className={styles.buttons}>
          <Button className={styles.button} onClick={editHandleClick}>
            Edit
          </Button>
          <Button className={styles.button} onClick={deleteHandleClick}>
            Delete
          </Button>
        </div>
      </div>
      <img src={posterURL || poster} alt="poster" />
      <MovieInfo title={title} genres={genres} year={year} />
    </div>
  );
};
