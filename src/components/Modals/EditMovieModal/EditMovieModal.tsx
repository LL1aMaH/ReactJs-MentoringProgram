import React, { memo, useCallback, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Formik, FormikHelpers, Form } from 'formik';

import { InputField, EType } from 'Components/InputField';
import { Button } from 'Components/Button';
import { Modal } from 'Components/Modal';

import Close from 'Assets/icons/close.svg';

import classnames from 'classnames';

import { GENRES } from 'Consts/index';
import { TMovie } from '../../../store/types';

import { MultiSelectField } from '../components/MultiSelectField';
import styles from './EditMovieModal.css';

import { getStartButton } from '../../../store/selectors';
import { validationSchema } from '../AddMovieModal/config';

import { editMovie } from '../../../store/actions';

import { getCorrectValue } from './utils';

export type TEditMovieModalComponentProps = {
  onCancel: () => void;
  value: TMovie;
};

export type TEditMovieModalProps = {
  value: TMovie;
};

const EditMovieModalComponent = memo(function EditMovieModalComponent({
  onCancel,
  value,
}: TEditMovieModalComponentProps): JSX.Element {
  const correctValue = getCorrectValue(value);
  const [state, setState] = useState<string[]>(correctValue.genres);

  const dispatch = useDispatch();

  const { activeButtonStart, sortStart } = useSelector(getStartButton);

  const handleClick = (item: string[]) => {
    setState([...item]);
  };

  const handleSubmitForm = (values: TMovie, { setSubmitting }: FormikHelpers<TMovie>) => {
    const correctValues = Object.assign(values, { genres: state });
    correctValues.runtime = +correctValues.runtime;
    dispatch(editMovie(correctValues, activeButtonStart, sortStart));
    setSubmitting(false);
    onCancel();
  };
  return (
    <div className={styles.modal}>
      <Close onClick={onCancel} />
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
                type={EType.date}
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
});

export const EditMovieModal = memo(function EditMovieModal({
  value,
}: TEditMovieModalProps): JSX.Element {
  const [isOpen, setOpen] = useState(true);

  const handleClose = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <EditMovieModalComponent onCancel={handleClose} value={value} />
    </Modal>
  );
});
