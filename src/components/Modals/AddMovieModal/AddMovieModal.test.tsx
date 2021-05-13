import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import getFormDecorator from '../../../../utils/decorators/withForm';
import withStore from '../../../../utils/decorators/withStore';

import { AddMovieModal } from './AddMovieModal';

describe('AddMovieModal', () => {
  const withForm = getFormDecorator({ initialValues: { test: 'test' } });
  const setShowSuccessfulAddMovieModal = jest.fn;
  it('renders correctly', () => {
    const getComponent = () =>
      render(
        withForm(() => (
          <AddMovieModal setShowSuccessfulAddMovieModal={setShowSuccessfulAddMovieModal} />
        )),
      );

    expect(getComponent().asFragment()).toMatchSnapshot();
  });

  it('renders modal correctly', () => {
    const component = render(
      withStore(
        () =>
          withForm(() => (
            <AddMovieModal setShowSuccessfulAddMovieModal={setShowSuccessfulAddMovieModal} />
          )),
        {
          genre: 'ALL',
          sort: 'RELEASE DATE',
        },
      ),
    );

    const button = component.getByTestId('addMovie');
    fireEvent.click(button);

    expect(component.asFragment()).toMatchSnapshot();
  });
});
