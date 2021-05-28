import React, { memo, useCallback, useState } from 'react';

import { useRouter } from 'next/router'
// import { useHistory } from 'react-router-dom';

import poster from '../../../../../public/Movie_040311_3.jpg'

import { DeleteMovieModal } from '../../../Modals/DeleteMovieModal/DeleteMovieModal';
import { EditMovieModal } from '../../../Modals/EditMovieModal/EditMovieModal';

import { Button } from '../../../Button/Button';

import styles from '../../../../../styles/MovieCard.module.scss'

import { MovieInfo } from './components/MovieInfo/MovieInfo';


export const MovieCard = memo(function MovieCard({ film }){
  const { poster_path: posterURL, title, genres, release_date: date } = film;

  const router = useRouter()

  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const editHandleClick = useCallback(() => {
    setShowEditModal((state) => !state);
  }, []);

  const deleteHandleClick = useCallback(() => {
    setShowDeleteModal((state) => !state);
  }, []);

  const onError = useCallback((e) => {
    e.currentTarget.src = '/src/assets/pictures/Movie_040311_3.jpg';
  }, []);

  const {id} = film
  const redirectToMovieDetails = useCallback(() => {
    router.push({ pathname: `/MovieDetailsPage/[id]`, query: { id } }, undefined)
  }, [
     film
  ]);


  return (
    <div className={styles.card}>
      {showEditModal && <EditMovieModal value={film} />}
      {showDeleteModal && <DeleteMovieModal id={id} />}

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
