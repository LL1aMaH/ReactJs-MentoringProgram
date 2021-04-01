import React, { memo } from 'react';

import { Button } from 'Components/Button';

import classnames from 'classnames';

import styles from './SearchBox.css';

export type SearchBoxProps = {
  className?: string;
};

export const SearchBox = memo(function SearchBox(props: SearchBoxProps): JSX.Element {
  const { className } = props;
  const searchBoxClassName = classnames(styles.searchBox, className);
  return (
    <div className={searchBoxClassName}>
      <input placeholder="What do you want to watch?" />
      <Button className={styles.button}>SEARCH</Button>
    </div>
  );
});
