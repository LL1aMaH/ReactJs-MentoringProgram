import React, { memo } from 'react';
import classnames from 'classnames';

import useDropdown from 'Components/NavBar/components/SelectField/hooks/useDropdown/useDropdown';
import { useMultiSelect } from './hooks';

import { MultiSelectFieldFacade } from './components/MultiSelectFieldFacade';
import { MultiSelectFieldOptions } from './components/MultiSelectFieldOptions';

import styles from './MultiSelectField.css';

export type TMultiSelectFieldProps = {
  value: Array<string>;
  onChange: (value: Array<string>) => void;
  options: Array<string>;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  dropdownClassName?: string;
  label?: string;
  labelClassName?: string;
};

export const MultiSelectField = memo(function MultiSelectField(
  props: TMultiSelectFieldProps,
): JSX.Element {
  const {
    value,
    onChange,
    options,
    disabled = false,
    placeholder,
    className,
    dropdownClassName,
    label,
    labelClassName,
  } = props;

  const { ref: refDropdown, isOpen, toggleDropdown } = useDropdown();

  const { handleSelect } = useMultiSelect({
    value,
    onChange,
  });

  return (
    <div className={className}>
      <span className={labelClassName}>{label}</span>
      <div ref={refDropdown} className={styles.layout}>
        <MultiSelectFieldFacade onClick={toggleDropdown} active={isOpen}>
          {value.join() ? value.join(' ') : placeholder}
        </MultiSelectFieldFacade>
        <div
          className={classnames(styles.dropdown, dropdownClassName, {
            [styles.dropdownOpen]: isOpen,
          })}
        >
          <MultiSelectFieldOptions
            valueMap={value}
            options={options}
            onChange={handleSelect}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
});
