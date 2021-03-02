import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button component', () => {
  it('renders correctly', () => {
    const getComponent = () => render(<Button>Button text</Button>);

    expect(getComponent().asFragment()).toMatchSnapshot();
  });
});
