import React, { memo } from 'react';

import classnames from 'classnames';

import styles from './CheckboxField.css';

export type TCheckboxFieldProps = {
  id: string;
  label: string;
  onChange: (label: string) => void;
  value?: string | number;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
};

export const CheckboxField = memo(function CheckboxField(props: TCheckboxFieldProps): JSX.Element {
  const { id, label, onChange, value, checked = false, className, disabled = false } = props;
  const labelClassName = classnames(styles.label, {
    [styles.disabled]: disabled,
  });

  const containerClassName = `${styles.container} ${className}`;

  const handleCheckboxChange = () => {
    onChange(label);
  };

  return (
    <div className={containerClassName}>
      <input
        type="checkbox"
        id={id}
        onChange={handleCheckboxChange}
        value={value}
        checked={checked}
        className={styles.checkboxField}
        disabled={disabled}
        data-testid="checkbox"
      />
      <span className={styles.checkMark} />
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
    </div>
  );
});
