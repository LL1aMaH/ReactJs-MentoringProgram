import React from 'react';
import { render } from '@testing-library/react';

import getFormDecorator from '../../../../utils/decorators/withForm';

import withStore from '../../../../utils/decorators/withStore';

import { DeleteMovieModal } from './DeleteMovieModal';

describe('DeleteMovieModal', () => {
  const withForm = getFormDecorator({ initialValues: { test: 'test' } });
  it('renders correctly', () => {
    const getComponent = () =>
      render(
        withStore(() => withForm(() => <DeleteMovieModal id={2} />), {
          genre: 'ALL',
          sort: 'RELEASE DATE',
        }),
      );

    expect(getComponent().asFragment()).toMatchSnapshot();
  });
});
