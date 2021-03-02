import React, { memo } from 'react';

import classnames from 'classnames';

import { Button } from 'Components/Button';

import SelectFieldIcon from 'Assets/icons/dropdown.svg';

import styles from './SelectButton.css';

export type TSelectButtonProps = {
  label: string;
  onClick: () => void;
  isOpen: boolean;
  buttonClassName?: string;
};

const SelectButton = memo(function SelectButton(props: TSelectButtonProps): JSX.Element {
  const { label, onClick, isOpen, buttonClassName } = props;
  const className = classnames(styles.selectButton, buttonClassName, {
    [styles.dropdownOpen]: isOpen,
    [styles.dropdownClose]: !isOpen,
  });
  return (
    <Button testId="selectButton" className={className} onClick={onClick}>
      {label}
      <SelectFieldIcon />
    </Button>
  );
});

export default SelectButton;
