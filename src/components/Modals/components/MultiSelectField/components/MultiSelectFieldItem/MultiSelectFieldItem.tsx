import React, { memo, useCallback } from 'react';
import { CheckboxField } from '../CheckboxField';
import styles from './MultiSelectFieldItem.css';

export type TMultiSelectFieldItemProps = {
  value: string;
  label: string;
  option: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (option: string) => void;
  onMouseEnter: (value: string) => void;
};

export const MultiSelectFieldItem = memo(function MultiSelectFieldItem(
  props: TMultiSelectFieldItemProps,
): JSX.Element {
  const { value, label, checked, disabled = false, option, onChange, onMouseEnter } = props;

  const handleChange = useCallback(() => {
    onChange(option);
  }, [onChange, option]);

  const handleMouseEnter = useCallback(() => {
    onMouseEnter(option);
  }, [onMouseEnter, option]);

  return (
    <li className={styles.option} onMouseEnter={handleMouseEnter}>
      <CheckboxField
        id={value}
        label={label}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={styles.checkbox}
      />
    </li>
  );
});
