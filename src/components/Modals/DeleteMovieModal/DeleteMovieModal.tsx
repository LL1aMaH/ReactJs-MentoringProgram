import React, { useCallback, useState } from 'react';
import { Modal } from 'Components/Modal';

import Close from 'Assets/icons/close.svg';

import { Button } from 'Components/Button';

import { useDispatch, useSelector } from 'react-redux';

import { deleteMovie } from '../../../store/actions';
import { getStartButton } from '../../../store/selectors';

import styles from './DeleteMovieModal.css';

export type TDeleteMovieModalProps = {
  id: number;
};

export type DeleteMovieModalComponentProps = {
  onCancel: () => void;
  classNameComponent?: string;
  id: number;
};

const DeleteMovieModalComponent = ({ onCancel, id }: DeleteMovieModalComponentProps) => {
  const dispatch = useDispatch();
  const { activeButtonStart, sortStart } = useSelector(getStartButton);
  const handleClick = useCallback(() => {
    dispatch(deleteMovie(id, activeButtonStart, sortStart));
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

export const DeleteMovieModal = ({ id }: TDeleteMovieModalProps): JSX.Element => {
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
