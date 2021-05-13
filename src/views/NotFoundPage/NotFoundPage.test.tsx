import React from 'react';
import { render } from '@testing-library/react';

import withRouter from '../../../utils/decorators/withRouter';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const component = render(withRouter(() => <NotFoundPage />));
    expect(component.asFragment()).toMatchSnapshot();
  });
});
