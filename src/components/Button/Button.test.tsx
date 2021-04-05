import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const getComponent = () => render(<Button onClick={jest.fn}>Button text</Button>);

    expect(getComponent().asFragment()).toMatchSnapshot();
  });
});
