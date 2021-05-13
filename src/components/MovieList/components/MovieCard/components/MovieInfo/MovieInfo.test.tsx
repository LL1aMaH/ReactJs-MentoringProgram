import React from 'react';
import { render } from '@testing-library/react';

import { MovieInfo } from './MovieInfo';

describe('MovieInfo', () => {
  it('renders correctly', () => {
    const component = render(<MovieInfo title="title" genres={[]} year="1234" />);
    expect(component.asFragment()).toMatchSnapshot();
  });
});
