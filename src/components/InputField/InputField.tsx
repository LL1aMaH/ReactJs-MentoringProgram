/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, InputHTMLAttributes } from 'react';

import { Field } from 'formik';

import styles from './InputField.css';

export enum EType {
  text = 'text',
  date = 'date',
}
export type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  onChange?: (e?: any) => void;
  type?: EType;
  error?: any;
};

export const InputField = memo(function InputField(props: InputFieldProps): JSX.Element {
  const {
    className,
    label,
    labelClassName,
    inputClassName,
    disabled,
    type = EType.text,
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
