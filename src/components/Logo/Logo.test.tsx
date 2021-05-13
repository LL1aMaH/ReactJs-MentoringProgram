import React from 'react';
import { render } from '@testing-library/react';

import withRouter from '../../../utils/decorators/withRouter';

import { Logo } from './Logo';

describe('NotFoundPage', () => {
  it('renders correctly', () => {
    const component = render(withRouter(() => <Logo />));
    expect(component.asFragment()).toMatchSnapshot();
  });
});
