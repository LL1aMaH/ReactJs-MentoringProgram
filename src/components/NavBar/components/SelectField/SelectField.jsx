import React, { useState, useCallback, memo, useEffect } from 'react';

import classnames from 'classnames';

import styles from '../../../../../styles/SelectField.module.scss';

import SelectButton from './components/SelectButton/SelectButton';
import SelectOption from './components/SelectOption/SelectOption';
import useDropdown from './hooks/useDropdown/useDropdown';


export const SelectField = memo(function SelectField(props) {
  const {
    options,
    onChange,
    disabled = false,
    className,
    label,
    containerClassName,
    buttonClassName,
    optionClassName,
    optionListClassName,
    selectedOptionClassName,
    labelClassName,
  } = props;

  const { ref, isOpen, toggleDropdown, closeDropdown } = useDropdown();

  const [selectedValue, setSelectedValue] = useState(options[0]);

  useEffect(() => {
    setSelectedValue(selectedValue);
  }, [selectedValue]);

  const handleClick = useCallback(
    (item) => {
      setSelectedValue(item);

      onChange(item);

      closeDropdown();
    },
    [onChange, closeDropdown],
  );

  const handleToggleDropdown = useCallback(() => {
    if (!disabled) {
      toggleDropdown();
    }
  }, [disabled, toggleDropdown]);

  const layoutClassName = classnames(styles.container, className, {
    [styles.disabledContainer]: disabled,
  });

  const listClassName = classnames(styles.selectList, optionListClassName, {
    [styles.open]: isOpen,
    [styles.close]: !isOpen,
  });

  const droptDownClassName = classnames(styles.dropDown, containerClassName);

  return (
    <div className={droptDownClassName}>
      {label && <span className={labelClassName}>{label}</span>}
      <div className={layoutClassName} ref={ref}>
        <SelectButton
          label={selectedValue}
          onClick={handleToggleDropdown}
          isOpen={isOpen}
          buttonClassName={buttonClassName}
        />
        <ul className={listClassName}>
          {options.map((item) => (
            <SelectOption
              onClick={handleClick}
              key={item}
              label={item}
              value={item}
              isSelected={item === selectedValue}
              optionClassName={optionClassName}
              selectedOptionClassName={selectedOptionClassName}
            />
          ))}
        </ul>
      </div>
    </div>
  );
});
