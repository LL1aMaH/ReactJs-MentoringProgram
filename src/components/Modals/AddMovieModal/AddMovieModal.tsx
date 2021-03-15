import React, { useCallback, useState } from 'react';
import { Button } from 'Components/Button';
import { InputField } from 'Components/InputField';
import { Modal } from 'Components/Modal';

import { SelectField } from 'Components/NavBar/components/SelectField';

import Close from 'Assets/icons/close.svg';

import classnames from 'classnames';
import styles from './AddMovieModal.css';

export type AddMovieModalProps = {
  className?: string;
};

export type AddMovieModalComponentProps = {
  onCancel: () => void;
};

const AddMovieModalComponent = ({ onCancel }: AddMovieModalComponentProps) => (
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
    <SelectField
      options={['Crime', 'Documentary', 'Horror', 'Comedy']}
      onChange={(val) => console.log(val)}
      label="GENRE"
      containerClassName={styles.containerSelectField}
      className={styles.selectField}
      buttonClassName={styles.selectButton}
      optionListClassName={styles.optionList}
      optionClassName={classnames(styles.selectButton, styles.option)}
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

export const AddMovieModal = ({ className }: AddMovieModalProps): JSX.Element => {
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
        <AddMovieModalComponent onCancel={handleClose} />
      </Modal>
    </>
  );
};
