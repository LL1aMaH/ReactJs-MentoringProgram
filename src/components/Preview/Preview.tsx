import React, { memo } from 'react';

import { Logo } from 'Components/Logo';

import { AddMovieModal } from '../Modals/AddMovieModal';
import { SearchBox } from './components/SearchBox';

import styles from './Preview.css';

export const Preview = memo(function Preview(): JSX.Element {
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
          <AddMovieModal className={styles.button} />
        </div>
        <p>FIND YOUR MOVIE</p>
        <SearchBox className={styles.searchBox} />
      </div>
    </>
  );
});
