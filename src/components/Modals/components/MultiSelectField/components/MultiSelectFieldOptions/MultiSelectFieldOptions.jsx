import React, { memo, useState, useCallback } from 'react';
import classnames from 'classnames';

import styles from '../../../../../../../styles/MultiSelectFieldOptions.module.scss';

import { MultiSelectFieldItem } from '../MultiSelectFieldItem/MultiSelectFieldItem';


export const MultiSelectFieldOptions = memo(function MultiSelectFieldOptionsBase(
  props,
) {
  const { valueMap, options, onChange, renderDescription, disabled = false } = props;

  const [activeOption, setActiveOption] = useState<string | null>(null);

  const handleMouseEnter = useCallback((option) => {
    setActiveOption(option);
  }, []);

  return (
    <div className={classnames(styles.layout)}>
      <ul className={styles.options}>
        {options.map((option) => {
          const optionLabel = option;

          return (
            <MultiSelectFieldItem
              key={optionLabel}
              value={optionLabel}
              label={optionLabel}
              checked={valueMap.includes(optionLabel)}
              disabled={disabled}
              option={option}
              onChange={onChange}
              onMouseEnter={handleMouseEnter}
            />
          );
        })}
      </ul>
      {renderDescription && activeOption && (
        <div className={styles.description}>{renderDescription(activeOption)}</div>
      )}
    </div>
  );
});
