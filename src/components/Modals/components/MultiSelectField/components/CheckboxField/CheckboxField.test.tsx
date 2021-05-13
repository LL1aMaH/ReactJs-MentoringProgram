import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { CheckboxField } from './CheckboxField';

describe('CheckboxField component', () => {
  const getComponent = ({ checked = false, disabled = false, onChange = jest.fn() } = {}) =>
    render(
      <CheckboxField
        id="test"
        label="test"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />,
    );

  it('should render correctly ', () => {
    const getComponentwithoutProps = ({ onChange = jest.fn() } = {}) =>
      render(<CheckboxField id="test" label="test" onChange={onChange} />);
    expect(getComponentwithoutProps({}).asFragment()).toMatchSnapshot();
  });
  it('should render correctly checked component', () => {
    expect(getComponent({ checked: true }).asFragment()).toMatchSnapshot();
  });
  it('should render correctly disabled unchecked component', () => {
    expect(getComponent({ disabled: true }).asFragment()).toMatchSnapshot();
  });
  it('should called onChange', () => {
    const handleChange = jest.fn();
    const { getByTestId } = getComponent({ onChange: handleChange });

    fireEvent.click(getByTestId('checkbox'));

    expect(handleChange).toHaveBeenCalledWith('test');
  });
});
