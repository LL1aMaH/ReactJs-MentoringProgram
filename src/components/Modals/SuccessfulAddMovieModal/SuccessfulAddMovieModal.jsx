import React, { useCallback, useState } from 'react';
import { Modal } from '../../Modal/Modal';

import Close from '../../../../public/close.svg'

import styles from '../../../../styles/SuccessfulAddMovieModal.module.scss';


const SuccessfulAddMovieModalComponent = ({ onCancel }) => {
  return (
    <div className={styles.modal}>
      <Close onClick={onCancel} alt="close" />
      <div className={styles.check}>&#10004;</div>
      <h1>CONGRATULATIONS !</h1>
      <p>The movie has been added to database successfully</p>
    </div>
  );
};

export const SuccessfulAddMovieModal = ()=> {
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
