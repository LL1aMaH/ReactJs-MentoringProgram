import React, { memo } from 'react';
import classnames from 'classnames';

import styles from '../../../styles/Button.module.scss'


export const Button = memo(function Button({
  className,
  children,
  onClick,
  tabIndex = 0,
  disabled = false,
  testId,
  title,
  type,
  ...restProps
}) {
  return (
    <button
      {...restProps}
      className={classnames(className, styles.button, {
        [styles.disabled]: disabled,
      })}
      type={type}
      onClick={onClick}
      tabIndex={tabIndex}
      disabled={disabled}
      data-testid={testId}
      title={title}
    >
      {children}
    </button>
  );
});
