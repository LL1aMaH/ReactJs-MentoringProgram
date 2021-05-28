import React, { useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Formik, Form } from 'formik';

import { InputField } from '../../InputField/InputField';
import { Button } from '../../Button/Button';
import { Modal } from '../../Modal/Modal';

import Close from '../../../../public/close.svg';

import classnames from 'classnames';

import { GENRES } from '../../../consts/const';

import styles from '../../../../styles/EditMovieModal.module.scss'


import { MultiSelectField } from '../components/MultiSelectField/MultiSelectField';

// import { getStartButton } from '../../../store/selectors';
import { validationSchema } from '../AddMovieModal/config';

// import { editMovie } from '../../../store/actions';

import { getCorrectValue } from './utils/getCorrectValue';


const EditMovieModalComponent = ({
  onCancel,
  value,
})=> {
  const correctValue = getCorrectValue(value);
  const [state, setState] = useState(correctValue.genres);

  const dispatch = useDispatch();

  const { activeButtonStart, sortStart } = useSelector(getStartButton);

  const handleClick = (item) => {
    setState([...item]);
  };

  const handleSubmitForm = (values, { setSubmitting }) => {
    const correctValues = Object.assign(values, { genres: state });
    correctValues.runtime = +correctValues.runtime;
    editMovie(correctValues, activeButtonStart, sortStart, dispatch);
    setSubmitting(false);
    onCancel();
  };
  return (
    <div className={styles.modal}>
      <Close onClick={onCancel} testId="svg" />
      <p>EDIT MOVIE</p>

      <Formik
        initialValues={correctValue}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}
      >
        {({ errors }) => {
          return (
            <Form>
              <InputField
                value={correctValue.id.toString()}
                label="MOVIE ID"
                labelClassName={styles.label}
                className={classnames(styles.field, styles.movieId)}
                disabled
              />
              <InputField
                label="TITLE"
                labelClassName={styles.label}
                className={styles.field}
                name="title"
                id="title"
                error={errors.title}
              />
              <InputField
                label="RELEASE DATA"
                labelClassName={styles.label}
                className={styles.field}
                type="date"
                name="release_date"
                id="release_date"
                error={errors.release_date}
              />
              <InputField
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
                label="OVERVIEW"
                labelClassName={styles.label}
                className={styles.field}
                name="overview"
                id="overview"
              />
              <InputField
                label="RUNTIME"
                labelClassName={styles.label}
                className={styles.field}
                name="runtime"
                id="runtime"
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

export const EditMovieModal = ({ value }) => {
  const [isOpen, setOpen] = useState(true);

  const handleClose = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <EditMovieModalComponent onCancel={handleClose} value={value} />
    </Modal>
  );
};
