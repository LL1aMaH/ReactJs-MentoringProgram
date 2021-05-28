import React, { memo } from 'react';
import classnames from 'classnames';

import useDropdown from '../../../NavBar/components/SelectField/hooks/useDropdown/useDropdown'

import styles from '../../../../../styles/MultiSelectField.module.scss'

import useMultiSelect from './hooks/useMultiSelect/useMultiSelect';

import { MultiSelectFieldFacade } from './components/MultiSelectFieldFacade/MultiSelectFieldFacade';
import { MultiSelectFieldOptions } from './components/MultiSelectFieldOptions/MultiSelectFieldOptions';


export const MultiSelectField = memo(function MultiSelectField(
  props,
){
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
