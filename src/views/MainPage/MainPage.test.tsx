import React from 'react';
import { render } from '@testing-library/react';

import withStore from '../../../utils/decorators/withStore';

import withRouter from '../../../utils/decorators/withRouter';

import getFormDecorator from '../../../utils/decorators/withForm';

import MainPage from './MainPage';

describe('MainPage', () => {
  const withForm = getFormDecorator({ initialValues: { test: 'test' } });
  it('renders correctly', () => {
    const component = render(
      withStore(() => withRouter(() => withForm(() => <MainPage />)), {
        genre: 'ALL',
        sort: 'RELEASE DATE',
        data: [],
        total: null,
        offset: null,
        limit: null,
        isLoading: false,
        mainFilm: null,
      }),
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
