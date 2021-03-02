import React, { memo, useCallback } from 'react';

import classnames from 'classnames';

import styles from './SelectOption.css';

export type TSelectOptionProps<T> = {
  value: T | null;
  label: string;
  isSelected?: boolean;
  onClick: (value: T) => void;
  optionClassName?: string;
  selectedOptionClassName?: string;
};

const SelectOption = memo(function SelectOption<T>(props: TSelectOptionProps<T>): JSX.Element {
  const {
    value,
    label,
    isSelected = false,
    onClick,
    optionClassName,
    selectedOptionClassName = '',
  } = props;

  const className = classnames(styles.option, optionClassName, {
    [selectedOptionClassName]: isSelected,
  });

  const handleClick = useCallback(() => {
    if (value) {
      onClick(value);
    }
  }, [value, onClick]);

  return (
    <li>
      <button type="button" className={className} onClick={handleClick}>
        {label}
      </button>
    </li>
  );
});

export default SelectOption;
