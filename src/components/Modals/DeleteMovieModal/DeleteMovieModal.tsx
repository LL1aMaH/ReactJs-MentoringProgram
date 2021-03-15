import React, { useCallback, useState } from 'react';
import { Modal } from 'Components/Modal';

import Close from 'Assets/icons/close.svg';

import { Button } from 'Components/Button';
import styles from './DeleteMovieModal.css';

export type DeleteMovieModalComponentProps = {
  onCancel: () => void;
  classNameComponent?: string;
};

const DeleteMovieModalComponent = ({ onCancel }: DeleteMovieModalComponentProps) => (
  <div className={styles.modal}>
    <Close onClick={onCancel} />
    <h1>DELETE MOVIE</h1>
    <p>Are you sure you want to delete this movie?</p>
    <Button className={styles.button}>CONFIRM</Button>
  </div>
);

export const DeleteMovieModal = (): JSX.Element => {
  const [isOpen, setOpen] = useState(true);

  const handleClose = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <DeleteMovieModalComponent onCancel={handleClose} classNameComponent={styles.modal} />
      </Modal>
    </>
  );
};
