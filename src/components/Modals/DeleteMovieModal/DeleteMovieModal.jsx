import React, { useCallback, useState } from 'react';
import { Modal } from '../../Modal/Modal';

import Close from '../../../../public/close.svg'

import { Button } from '../../Button/Button';

import { useDispatch, useSelector } from 'react-redux';

import styles from '../../../../styles/DeleteMovieModal.module.scss'

// import { deleteMovie } from '../../../store/actions';

// import { getStartButton } from '../../../store/selectors';


const DeleteMovieModalComponent = ({ onCancel, id }) => {
  const dispatch = useDispatch();
  const { activeButtonStart, sortStart } = useSelector(getStartButton);
  const handleClick = useCallback(() => {
    deleteMovie(id, activeButtonStart, sortStart, dispatch);
    onCancel();
  }, [deleteMovie]);

  return (
    <div className={styles.modal}>
      <Close onClick={onCancel} />
      <h1>DELETE MOVIE</h1>
      <p>Are you sure you want to delete this movie?</p>
      <Button className={styles.button} onClick={handleClick}>
        CONFIRM
      </Button>
    </div>
  );
};

export const DeleteMovieModal = ({ id })=> {
  const [isOpen, setOpen] = useState(true);

  const handleClose = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <DeleteMovieModalComponent
          onCancel={handleClose}
          classNameComponent={styles.modal}
          id={id}
        />
      </Modal>
    </>
  );
};
