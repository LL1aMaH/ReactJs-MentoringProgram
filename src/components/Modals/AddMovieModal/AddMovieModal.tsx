import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

import { Formik, FormikHelpers, Form } from 'formik';

import { useDispatch, useSelector } from 'react-redux';

import { InputField, EType } from 'Components/InputField';
import { Button } from 'Components/Button';
import { Modal } from 'Components/Modal';

import Close from 'Assets/icons/close.svg';
import { GENRES } from 'Consts/index';

import { validationSchema } from './config';

import { addMovie } from '../../../store/actions';

import { TAddMovie } from '../../../store/types';
import { getStartButton } from '../../../store/selectors';

import { MultiSelectField } from '../components/MultiSelectField';

import styles from './AddMovieModal.css';

export type AddMovieModalProps = {
  className?: string;
  setShowSuccessfulAddMovieModal: Dispatch<SetStateAction<boolean>>;
};

export type AddMovieModalComponentProps = {
  onCancel: () => void;
  setShowSuccessfulAddMovieModal: Dispatch<SetStateAction<boolean>>;
};

const AddMovieModalComponent = ({
  onCancel,
  setShowSuccessfulAddMovieModal,
}: AddMovieModalComponentProps) => {
  const [state, setState] = useState<string[]>([]);
  const dispatch = useDispatch();

  const { activeButtonStart, sortStart } = useSelector(getStartButton);

  const handleClick = (item: string[]) => {
    setState([...item]);
  };

  const handleSubmitForm = (values: TAddMovie, { setSubmitting }: FormikHelpers<TAddMovie>) => {
    const correctValues = Object.assign(values, { genres: state });
    correctValues.runtime = +correctValues.runtime;
    addMovie(correctValues, activeButtonStart, sortStart, dispatch);
    setSubmitting(false);
    setShowSuccessfulAddMovieModal((visible) => !visible);
    onCancel();
  };

  const initialValues = {
    title: '',
    release_date: '',
    overview: '',
    runtime: 90,
    genres: [''],
    poster_path: '',
  };

  return (
    <div className={styles.modal}>
      <Close onClick={onCancel} />
      <p>ADD MOVIE</p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}
      >
        {({ errors }) => {
          return (
            <Form>
              <InputField
                placeholder="Title"
                label="TITLE"
                labelClassName={styles.label}
                className={styles.field}
                name="title"
                id="title"
                error={errors.title}
              />
              <InputField
                placeholder="Select Data"
                label="RELEASE DATA"
                labelClassName={styles.label}
                className={styles.field}
                type={EType.date}
                name="release_date"
                id="release_date"
                error={errors.release_date}
              />
              <InputField
                placeholder="Movie URL here"
                label="MOVIE URL"
                labelClassName={styles.label}
                className={styles.field}
                name="poster_path"
                id="poster_path"
                error={errors.poster_path}
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
                placeholder="Overview text goes here"
                label="OVERVIEW"
                labelClassName={styles.label}
                className={styles.field}
                name="overview"
                id="overview"
                error={errors.overview}
              />
              <InputField
                placeholder="Runtime Text Goes here"
                label="RUNTIME"
                labelClassName={styles.label}
                className={styles.field}
                name="runtime"
                id="runtime"
                error={errors.runtime}
              />
              <div className={styles.buttons}>
                <Button className={styles.button} type="reset">
                  RESET
                </Button>
                <Button className={styles.button} type="submit">
                  SUBMIT
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export const AddMovieModal = ({
  className,
  setShowSuccessfulAddMovieModal,
}: AddMovieModalProps): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <>
      <Button onClick={handleClose} className={className} testId="addMovie">
        + ADD MOVIE
      </Button>
      <Modal open={isOpen} onClose={handleClose}>
        <AddMovieModalComponent
          onCancel={handleClose}
          setShowSuccessfulAddMovieModal={setShowSuccessfulAddMovieModal}
        />
      </Modal>
    </>
  );
};
