import React from 'react';

import { Link } from 'react-router-dom';
import classnames from 'classnames';

import styles from './Logo.css';

export type LogoProp = {
  className?: string;
};

export const Logo = ({ className }: LogoProp): JSX.Element => (
  <Link to="/" className={classnames(styles.logo, className)}>
    <b>netflix</b>roulette
  </Link>
);
