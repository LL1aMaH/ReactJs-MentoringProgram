import React, { memo, useCallback } from 'react';

import classnames from 'classnames';

import styles from '../../../../../../../styles/SelectOption.module.scss';


const SelectOption = memo(function SelectOption(props){
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
