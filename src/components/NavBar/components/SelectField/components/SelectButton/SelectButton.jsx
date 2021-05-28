import React, { memo } from 'react';

import classnames from 'classnames';

import SelectFieldIcon from '../../../../../../../public/dropdown.svg';

import {Button} from '../../../../../Button/Button'

import styles from '../../../../../../../styles/SelectButton.module.scss';



const SelectButton = memo(function SelectButton(props){
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
