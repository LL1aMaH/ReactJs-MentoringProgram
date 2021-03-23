import React, { useCallback, useState } from 'react';
import { Button } from 'Components/Button';
import { InputField } from 'Components/InputField';
import { Modal } from 'Components/Modal';

import Close from 'Assets/icons/close.svg';

import { MultiSelectField } from '../components/MultiSelectField';

import styles from './AddMovieModal.css';

export type AddMovieModalProps = {
  className?: string;
  handleClick: (arr: Array<string>) => void;
  value: Array<string>;
};

export type AddMovieModalComponentProps = {
  onCancel: () => void;
  handleClick: (arr: Array<string>) => void;
  value: Array<string>;
};

const AddMovieModalComponent = ({ onCancel, value, handleClick }: AddMovieModalComponentProps) => {
  return (
    <div className={styles.modal}>
      <Close onClick={onCancel} />
      <p>ADD MOVIE</p>
      <InputField
        placeholder="Moana"
        label="TITLE"
        labelClassName={styles.label}
        className={styles.field}
      />
      <InputField
        placeholder="Select Data"
        label="RELEASE DATA"
        labelClassName={styles.label}
        className={styles.field}
      />
      <InputField
        placeholder="Movie URL here"
        label="MOVIE URL"
        labelClassName={styles.label}
        className={styles.field}
      />
      <MultiSelectField
        options={['Crime', 'Documentary', 'Horror', 'Comedy']}
        value={value}
        onChange={handleClick}
        placeholder="Select Genre"
        className={styles.multiSelect}
        label="GENRE"
        labelClassName={styles.label}
      />
      <InputField
        placeholder="Overview text goes here"
        label="OVERVIEW"
        labelClassName={styles.label}
        className={styles.field}
      />
      <InputField
        placeholder="Runtime Text Goes here"
        label="RUNTIME"
        labelClassName={styles.label}
        className={styles.field}
      />
      <div className={styles.buttons}>
        <Button className={styles.button}>RESET</Button>
        <Button className={styles.button} onClick={onCancel}>
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

export const AddMovieModal = ({
  className,
  handleClick,
  value,
}: AddMovieModalProps): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <>
      <Button onClick={handleClose} className={className}>
        + ADD MOVIE
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <AddMovieModalComponent onCancel={handleClose} handleClick={handleClick} value={value} />
      </Modal>
    </>
  );
};
