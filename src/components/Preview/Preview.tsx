/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Button } from 'Components/Button';

import { SearchBox } from './components/SearchBox';

import styles from './Preview.css';

export const Preview = (): JSX.Element => {
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
          <a href="#">
            <b>netflix</b>roulette
          </a>
          <Button className={styles.button}>+ ADD MOVIE</Button>
        </div>
        <p>FIND YOUR MOVIE</p>
        <SearchBox className={styles.searchBox} />
      </div>
    </>
  );
};
