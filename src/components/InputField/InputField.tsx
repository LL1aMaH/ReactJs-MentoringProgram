/* eslint-disable react/jsx-props-no-spreading */
import React, { memo, InputHTMLAttributes, useCallback } from 'react';

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
  onChange?: () => void;
  type?: EType;
};

export const InputField = memo(function InputField(props: InputFieldProps): JSX.Element {
  const {
    onChange,
    className,
    label,
    labelClassName,
    inputClassName,
    disabled,
    type = EType.text,
    ...restProps
  } = props;

  const handleChange = useCallback(
    ({ target: { value: inputValue } }): void => {
      if (onChange) {
        onChange(inputValue);
      }
    },
    [onChange],
  );
  return (
    <div className={className}>
      <span className={labelClassName}>{label}</span>
      <input
        {...restProps}
        type={type}
        className={inputClassName}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
});
