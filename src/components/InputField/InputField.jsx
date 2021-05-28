import React, { memo } from 'react';

import { Field } from 'formik';

import styles from '../../../styles/InputField.module.scss'

export const InputField = memo(function InputField(props) {
  const {
    className,
    label,
    labelClassName,
    inputClassName,
    disabled,
    type = text,
    error,
    ...restProps
  } = props;

  return (
    <div className={className}>
      {error ? <div className={styles.warning}>{error}</div> : null}
      <span className={labelClassName}>{label}</span>
      <Field
        {...restProps}
        type={type}
        className={inputClassName}
        disabled={disabled}
        autoComplete="off"
      />
    </div>
  );
});
