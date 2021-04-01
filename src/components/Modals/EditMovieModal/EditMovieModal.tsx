import React, { memo, useCallback, useState } from 'react';

import { InputField, EType } from 'Components/InputField';
import { Button } from 'Components/Button';
import { Modal } from 'Components/Modal';

import Close from 'Assets/icons/close.svg';

import { TMovie } from 'src/store/types';
import classnames from 'classnames';

import { GENRES } from 'Consts/index';
import { MultiSelectField } from '../components/MultiSelectField';
import styles from './EditMovieModal.css';

export type TEditMovieModalComponentProps = {
  onCancel: () => void;
  film: TMovie;
};

export type TEditMovieModalProps = {
  film: TMovie;
};

const EditMovieModalComponent = memo(function EditMovieModalComponent({
  onCancel,
  film,
}: TEditMovieModalComponentProps): JSX.Element {
  const [state, setState] = useState<string[]>(film.genres);

  const [stateReset, reset] = useState<boolean>(false);

  const handleClick = (item: string[]) => {
    setState([...item]);
  };

  const onReset = () => reset(!stateReset);

  return (
    <form className={styles.modal}>
      <Close onClick={onCancel} />
      <p>EDIT MOVIE</p>
      <InputField
        placeholder={film.id.toString()}
        label="MOVIE ID"
        labelClassName={styles.label}
        className={classnames(styles.field, styles.movieId)}
        disabled
      />
      <InputField
        value={film.title}
        label="TITLE"
        labelClassName={styles.label}
        className={styles.field}
      />
      <InputField
        value={film.release_date}
        label="RELEASE DATA"
        labelClassName={styles.label}
        className={styles.field}
        type={EType.date}
      />
      <InputField
        value={film.poster_path}
        label="MOVIE URL"
        labelClassName={styles.label}
        className={styles.field}
      />
      <MultiSelectField
        options={GENRES}
        value={state}
        onChange={handleClick}
        placeholder="Select Genre"
        className={styles.multiSelect}
        label="GENRE"
        labelClassName={styles.label}
      />
      <InputField
        value={film.overview}
        label="OVERVIEW"
        labelClassName={styles.label}
        className={styles.field}
      />
      <InputField
        value={film.runtime}
        label="RUNTIME"
        labelClassName={styles.label}
        className={styles.field}
      />
      <div className={styles.buttons}>
        <Button className={styles.button} onClick={onReset}>
          RESET
        </Button>
        <Button className={styles.button} onClick={onCancel}>
          SUBMIT
        </Button>
      </div>
    </form>
  );
});

export const EditMovieModal = memo(function EditMovieModal({
  film,
}: TEditMovieModalProps): JSX.Element {
  const [isOpen, setOpen] = useState(true);

  const handleClose = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <EditMovieModalComponent onCancel={handleClose} film={film} />
    </Modal>
  );
});
