import React from 'react';
import { render } from '@testing-library/react';

import withStore from '../../../utils/decorators/withStore';

import withRouter from '../../../utils/decorators/withRouter';

import SearchPage from './SearchPage';

describe('SearchPage', () => {
  it('renders correctly', () => {
    const component = render(
      withStore(() => withRouter(() => <SearchPage />, { pathname: '/search/test' }), {
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
