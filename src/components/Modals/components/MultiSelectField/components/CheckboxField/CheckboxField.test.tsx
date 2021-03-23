import React from 'react';
import { render } from '@testing-library/react';

import { CheckboxField } from './CheckboxField';

describe('CheckboxField component', () => {
  const getComponent = ({ checked = false, disabled = false } = {}) =>
    render(
      <CheckboxField
        id="test"
        label="test"
        onChange={jest.fn()}
        checked={checked}
        disabled={disabled}
      />,
    );

  it('should render correctly checked component', () => {
    expect(getComponent({ checked: true }).asFragment()).toMatchSnapshot();
  });
  it('should render correctly disabled unchecked component', () => {
    expect(getComponent({ disabled: true }).asFragment()).toMatchSnapshot();
  });
});
