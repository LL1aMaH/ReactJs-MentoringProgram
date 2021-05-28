import React, { memo, useCallback } from 'react';
import styles from '../../../../../../../styles/MultiSelectFieldItem.module.scss';

import { CheckboxField } from '../CheckboxField/CheckboxField';

export const MultiSelectFieldItem = memo(function MultiSelectFieldItem(
  props,
) {
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
