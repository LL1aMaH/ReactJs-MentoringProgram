import React, { memo } from 'react';

import classnames from 'classnames';

import styles from '../../../styles/Logo.module.scss' 

export const Logo = memo(function Logo({ className }) {
  return (
    <a href="/" className={classnames(styles.logo, className)} id="a">
      <b>netflix</b>roulette
    </a>
  );
});
