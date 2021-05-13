import React from 'react';
import { render } from '@testing-library/react';

import { NavBar } from './NavBar';

describe('NavBar', () => {
  it('renders correctly', () => {
    const component = render(
      <NavBar activeButton="ALL" handleClick={jest.fn} handleSelect={jest.fn} />,
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
