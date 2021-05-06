import React, { memo, SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from 'Components/Button';

import classnames from 'classnames';

import styles from './SearchBox.css';

export type SearchBoxProps = {
  searchValue?: string;
  className?: string;
};

export const SearchBox = memo(function SearchBox(props: SearchBoxProps): JSX.Element {
  const { searchValue: value = '', className } = props;
  const [searchValue, setSearchValue] = useState(value);

  const history = useHistory();

  const handleChange = (e: SyntheticEvent<HTMLInputElement>) =>
    setSearchValue(e.currentTarget.value);

  const handleClick = () => {
    if (searchValue) history.push(`/search/${searchValue}`);
  };

  const searchBoxClassName = classnames(styles.searchBox, className);
  return (
    <div className={searchBoxClassName}>
      <input placeholder="What do you want to watch?" value={searchValue} onChange={handleChange} />
      <Button className={styles.button} onClick={handleClick}>
        SEARCH
      </Button>
    </div>
  );
});
