import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import getFormDecorator from '../../../../utils/decorators/withForm';
import withStore from '../../../../utils/decorators/withStore';

import { EditMovieModal } from './EditMovieModal';

describe('EditMovieModal', () => {
  const withForm = getFormDecorator({ initialValues: { test: 'test' } });
  const value = {
    title: 'title',
    release_date: 'date',
    overview: 'overview',
    runtime: 123,
    genres: [],
    poster_path: 'path',
    id: 1,
  };
  it('renders correctly', () => {
    const getComponent = () =>
      render(
        withStore(() => withForm(() => <EditMovieModal value={value} />), {
          genre: 'ALL',
          sort: 'RELEASE DATE',
        }),
      );

    expect(getComponent().asFragment()).toMatchSnapshot();
  });

  it('renders change correctly', () => {
    const valueTest = {
      title: 'title',
      release_date: 'date',
      overview: 'overview',
      runtime: 123,
      genres: [],
      poster_path: 'path',
      id: 1,
    };
    const component = render(
      withStore(() => withForm(() => <EditMovieModal value={valueTest} />), {
        genre: 'ALL',
        sort: 'RELEASE DATE',
      }),
    );
    const { getByText } = component;

    fireEvent.click(getByText('Action'));
    expect(component.asFragment()).toMatchSnapshot();
  });
});
