import React, { ReactNode, ButtonHTMLAttributes, memo } from 'react';
import classnames from 'classnames';

import styles from './Button.css';

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  testId?: string;
};

export const Button = memo(function Button({
  className,
  children,
  onClick,
  tabIndex = 0,
  disabled = false,
  testId,
  title,
}: TButtonProps): JSX.Element {
  return (
    <button
      className={classnames(className, styles.button, {
        [styles.disabled]: disabled,
      })}
      type="button"
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
