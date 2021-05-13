import React, { useCallback, useState } from 'react';
import { Modal } from 'Components/Modal';

import Close from 'Assets/icons/close.svg';

import styles from './SuccessfulAddMovieModal.css';

export type SuccessfulAddMovieModalComponentProps = {
  onCancel: () => void;
};

const SuccessfulAddMovieModalComponent = ({ onCancel }: SuccessfulAddMovieModalComponentProps) => {
  return (
    <div className={styles.modal}>
      <Close onClick={onCancel} alt="close" />
      <div className={styles.check}>&#10004;</div>
      <h1>CONGRATULATIONS !</h1>
      <p>The movie has been added to database successfully</p>
    </div>
  );
};

export const SuccessfulAddMovieModal = (): JSX.Element => {
  const [isOpen, setOpen] = useState(true);

  const handleClose = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <SuccessfulAddMovieModalComponent onCancel={handleClose} />
    </Modal>
  );
};
