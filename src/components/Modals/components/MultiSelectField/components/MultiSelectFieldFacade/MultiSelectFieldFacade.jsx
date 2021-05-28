import React, { memo } from 'react';
import classnames from 'classnames';

import ArrowIcon from '../../../../../../../public/dropdown.svg'
'Assets/icons/dropdown.svg';

import styles from '../../../../../../../styles/MultiSelectFieldFacade.module.scss'

export const MultiSelectFieldFacade = memo(function MultiSelectFieldFacade(
  props,
) {
  const { children, onClick, active = false } = props;

  return (
    <div
      className={classnames(styles.layout, { [styles.active]: active })}
      onClick={onClick}
      role="presentation"
      data-testid="multi-select-field-facade"
    >
      <div className={styles.value}>{children}</div>
      <div className={styles.icons}>
        <ArrowIcon
          className={classnames(styles.icon, { [styles.activeArrow]: active })}
          tabIndex={-1}
          data-testid="arrow-icon"
        />
      </div>
    </div>
  );
});
