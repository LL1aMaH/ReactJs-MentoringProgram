import React, { memo, useState } from 'react';

import { Logo } from '../Logo/Logo';

import { SuccessfulAddMovieModal } from '../Modals/SuccessfulAddMovieModal/SuccessfulAddMovieModal';

import styles from '../../../styles/Preview.module.scss'

// import { AddMovieModal } from '../Modals/AddMovieModal/AddMovieModal';
import { SearchBox } from './components/SearchBox/SearchBox';


export const Preview = memo(function Preview({ searchValue }) {
  const [showSuccessfulAddMovieModal, setShowSuccessfulAddMovieModal] = useState(false);
  return (
    <>
      <div
        className={styles.preview}
        style={{
          backgroundImage: "url('/cover-image.jpg')",
          filter: 'blur(5px)',
          backgroundSize: "cover"
        }}
      />
      <div className={styles.previewContent}>
        <div className={styles.buttons}>
          <Logo />
          {/* <AddMovieModal
            className={styles.button}
            setShowSuccessfulAddMovieModal={setShowSuccessfulAddMovieModal}
          /> */}
          {showSuccessfulAddMovieModal && <SuccessfulAddMovieModal />}
        </div>
        <p>FIND YOUR MOVIE</p>
        <SearchBox className={styles.searchBox} searchValue={searchValue} />
      </div>
    </>
  );
});
