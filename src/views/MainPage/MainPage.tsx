import React from 'react';

import { NavBar } from 'Components/NavBar';
import { Preview } from 'Components/Preview';

import { MovieList } from 'Components/MovieList';

import ErrorBoundary from 'Components/ErrorBoundary';

const MainPage = (): JSX.Element => {
  return (
    <>
      <Preview />
      <NavBar />
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </>
  );
};

export default MainPage;
