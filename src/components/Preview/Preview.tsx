import React, { memo, useState } from 'react';

import { Logo } from 'Components/Logo';

import { AddMovieModal } from '../Modals/AddMovieModal';
import { SearchBox } from './components/SearchBox';

import styles from './Preview.css';

export const Preview = memo(function Preview(): JSX.Element {
  const [state, setState] = useState<string[]>([]);

  const handleClick = (item: string[]) => {
    setState([...item]);
  };
  return (
    <>
      <div
        className={styles.preview}
        style={{
          backgroundImage: 'url(src/Assets/pictures/cover-image.jpg)',
          filter: 'blur(5px)',
        }}
      />
      <div className={styles.previewContent}>
        <div className={styles.buttons}>
          <Logo />
          <AddMovieModal className={styles.button} handleClick={handleClick} value={state} />
        </div>
        <p>FIND YOUR MOVIE</p>
        <SearchBox className={styles.searchBox} />
      </div>
    </>
  );
});
