import React, { useState, useCallback, memo, useEffect } from 'react';

import classnames from 'classnames';

import SelectButton from './components/SelectButton';
import SelectOption from './components/SelectOption';
import useDropdown from './hooks/useDropdown/useDropdown';

import styles from './SelectField.css';

export type TSelectFieldProps<T> = {
  options: Array<string>;
  disabled?: boolean;
  onChange: (value: T) => void;
  className?: string;
  buttonClassName?: string;
  optionClassName?: string;
  optionListClassName?: string;
  selectedOptionClassName?: string;
};

function SelectFieldBase<T>(props: TSelectFieldProps<T>): JSX.Element {
  const {
    options,
    onChange,
    disabled = false,
    className,
    buttonClassName,
    optionClassName,
    optionListClassName,
    selectedOptionClassName,
  } = props;

  const { ref, isOpen, toggleDropdown, closeDropdown } = useDropdown();

  const [selectedValue, setSelectedValue] = useState(options[0]);

  useEffect(() => {
    setSelectedValue(selectedValue);
  }, [selectedValue]);

  const handleClick = useCallback(
    (item): void => {
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

  return (
    <div className={styles.dropDown}>
      <span>SORT BY</span>{' '}
      <div className={layoutClassName} ref={ref}>
        <SelectButton
          label={selectedValue}
          onClick={handleToggleDropdown}
          isOpen={isOpen}
          buttonClassName={buttonClassName}
        />
        <ul className={listClassName}>
          {options.map((item: string) => (
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
}

export const SelectField = memo(SelectFieldBase) as typeof SelectFieldBase;
