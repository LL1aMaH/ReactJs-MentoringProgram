import React, {  useCallback, useState } from 'react';

import { Formik, Form } from 'formik';

import { useDispatch, useSelector } from 'react-redux';

import { InputField } from '../../InputField/InputField';
import { Button } from '../../Button/Button';
import { Modal } from '../../Modal/Modal';

import Close from '../../../../public/close.svg';
import { GENRES } from '../../../consts/const';

import styles from '../../../../styles/AddMovieModal.module.scss';
import { validationSchema } from './config';

// import { addMovie } from '../../../store/actions';

// import { getStartButton } from '../../../store/selectors';

import { MultiSelectField } from '../components/MultiSelectField/MultiSelectField';


const AddMovieModalComponent = ({
  onCancel,
  setShowSuccessfulAddMovieModal,
}) => {
  const [state, setState] = useState([]);
  const dispatch = useDispatch();

  const { activeButtonStart, sortStart } = useSelector(getStartButton);

  const handleClick = (item) => {
    setState([...item]);
  };

  const handleSubmitForm = (values, { setSubmitting }) => {
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
                type='date'
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
}) => {
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
