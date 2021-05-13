/* eslint-disable react/prop-types */
import React, { memo, useEffect, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';

import FocusLock from 'react-focus-lock';

import styles from './Modal.css';

export type TModalProps = {
  open: boolean;
  children: ReactNode;
  onClose?: (e: object) => void;
  container?: Element;
  disableCloseOnBackground?: boolean;
  backgroundClassName?: string;
  contentClassName?: string;
};

export const Modal = memo(function Modal(props: TModalProps): JSX.Element {
  const {
    open,
    onClose,
    children,
    container = document.body,
    disableCloseOnBackground = false,
    contentClassName: customContentClassName,
    backgroundClassName: customBackgroundClassName,
  } = props;

  const layoutClassName = `${styles.layout} ${customBackgroundClassName}`;

  const contentClassName = `${styles.content}  ${customContentClassName}`;

  const handleBackgroundClick = useCallback(
    (e) => {
      const { target, currentTarget } = e;
      if (!disableCloseOnBackground && onClose && target === currentTarget) {
        onClose(e);
      }
    },
    [onClose, disableCloseOnBackground],
  );

  useEffect(() => {
    const root = document.body;

    if (open) {
      root.classList.add(styles.scrollLock);
    } else {
      root.classList.remove(styles.scrollLock);
    }

    return () => {
      root.classList.remove(styles.scrollLock);
    };
  }, [open]);

  const modal = open && (
    <div
      className={layoutClassName}
      onClick={handleBackgroundClick}
      data-testid="modal"
      role="presentation"
    >
      <FocusLock className={contentClassName}>{children}</FocusLock>
    </div>
  );

  return createPortal(modal, container);
});
