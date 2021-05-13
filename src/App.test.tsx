import React from 'react';
import { render } from '@testing-library/react';

import withRouter from '../utils/decorators/withRouter';

import App from './App';

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const component = render(withRouter(() => <App />));
    expect(component.asFragment()).toMatchSnapshot();
  });
});
