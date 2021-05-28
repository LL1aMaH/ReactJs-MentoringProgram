import React, { memo, useState } from 'react';
// import { useHistory } from 'react-router-dom';

import { Button } from '../../../Button/Button';

import classnames from 'classnames';

import styles from '../../../../../styles/SearchBox.module.scss'


export const SearchBox = memo(function SearchBox(props) {
  const { searchValue: value = '', className } = props;
  const [searchValue, setSearchValue] = useState(value);

  // const history = useHistory();

  const handleChange = (e) =>
    setSearchValue(e.currentTarget.value);

  const handleClick = () => {
    // if (searchValue) history.push(`/search/${searchValue}`);
  };

  const searchBoxClassName = classnames(styles.searchBox, className);
  return (
    <div className={searchBoxClassName}>
      <input placeholder="What do you want to watch?" value={searchValue} onChange={handleChange} />
      <Button className={styles.button} onClick={handleClick} testId="button">
        SEARCH
      </Button>
    </div>
  );
});
