import React, { memo } from 'react';

import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './Logo.css';

export type LogoProp = {
  className?: string;
};

export const Logo = memo(function Logo({ className }: LogoProp): JSX.Element {
  return (
    <Link to="/" className={classnames(styles.logo, className)}>
      <b>netflix</b>roulette
    </Link>
  );
});
