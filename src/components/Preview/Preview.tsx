import React, { memo, useState } from 'react';

import { Logo } from 'Components/Logo';

import { SuccessfulAddMovieModal } from 'Components/Modals/SuccessfulAddMovieModal';

import { AddMovieModal } from '../Modals/AddMovieModal';
import { SearchBox } from './components/SearchBox';

import styles from './Preview.css';

export type TPreviewProps = {
  searchValue?: string;
};

export const Preview = memo(function Preview({ searchValue }: TPreviewProps): JSX.Element {
  const [showSuccessfulAddMovieModal, setShowSuccessfulAddMovieModal] = useState(false);
  return (
    <>
      <div
        className={styles.preview}
        style={{
          backgroundImage: 'url(/src/Assets/pictures/cover-image.jpg)',
          filter: 'blur(5px)',
        }}
      />
      <div className={styles.previewContent}>
        <div className={styles.buttons}>
          <Logo />
          <AddMovieModal
            className={styles.button}
            setShowSuccessfulAddMovieModal={setShowSuccessfulAddMovieModal}
          />
          {showSuccessfulAddMovieModal && <SuccessfulAddMovieModal />}
        </div>
        <p>FIND YOUR MOVIE</p>
        <SearchBox className={styles.searchBox} searchValue={searchValue} />
      </div>
    </>
  );
});
