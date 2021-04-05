/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode, ButtonHTMLAttributes, memo } from 'react';
import classnames from 'classnames';

import styles from './Button.css';

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  testId?: string;
  type?: 'submit' | 'reset' | 'button';
};

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
}: TButtonProps): JSX.Element {
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
