import React from 'react';
import { render } from '@testing-library/react';

import { InputField } from './InputField';

describe('InputField', () => {
  it('renders correctly', () => {
    const getComponent = () => render(<InputField label="label" placeholder="placeholder" />);

    expect(getComponent().asFragment()).toMatchSnapshot();
  });
});
