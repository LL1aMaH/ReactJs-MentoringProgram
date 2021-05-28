import React, { memo, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import FocusLock from 'react-focus-lock';

import styles from '../../../styles/Modal.module.scss'

export const Modal = memo(function Modal(props){
  let {
    open,
    onClose,
    children,
    container,
    disableCloseOnBackground = false,
    contentClassName: customContentClassName,
    backgroundClassName: customBackgroundClassName,
  } = props;

  useEffect(() => 
  {
    container = document.body
  },[])

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
