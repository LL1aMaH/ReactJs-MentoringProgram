import React, { memo } from 'react';

export type InputFieldProps = {
  placeholder?: string;
  label?: string;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
};

export const InputField = memo(function InputField(props: InputFieldProps): JSX.Element {
  const { placeholder, className, label, labelClassName, inputClassName, disabled } = props;
  return (
    <div className={className}>
      <span className={labelClassName}>{label}</span>
      <input type="text" placeholder={placeholder} className={inputClassName} disabled={disabled} />
    </div>
  );
});
