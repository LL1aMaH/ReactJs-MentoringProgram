import React, { memo, useCallback, useState } from 'react';

import { InputField, EType } from 'Components/InputField';
import { Button } from 'Components/Button';
import { Modal } from 'Components/Modal';

import { GENRES } from 'Consts/index';

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

const AddMovieModalComponent = memo(function AddMovieModalComponent({
  onCancel,
  value,
  handleClick,
}: AddMovieModalComponentProps) {
  return (
    <div className={styles.modal}>
      <Close onClick={onCancel} />
      <p>ADD MOVIE</p>
      <InputField
        placeholder="Title"
        label="TITLE"
        labelClassName={styles.label}
        className={styles.field}
      />
      <InputField
        placeholder="Select Data"
        label="RELEASE DATA"
        labelClassName={styles.label}
        className={styles.field}
        type={EType.date}
      />
      <InputField
        placeholder="Movie URL here"
        label="MOVIE URL"
        labelClassName={styles.label}
        className={styles.field}
      />
      <MultiSelectField
        options={GENRES}
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
});

export const AddMovieModal = memo(function AddMovieModal({
  className,
  handleClick,
  value,
}: AddMovieModalProps): JSX.Element {
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
});
