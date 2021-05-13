import React from 'react';
import { render } from '@testing-library/react';

import withRouter from '../../../utils/decorators/withRouter';

import { Preview } from './Preview';

describe('Preview', () => {
  it('renders correctly', () => {
    const component = render(withRouter(() => <Preview />));
    expect(component.asFragment()).toMatchSnapshot();
  });
});
