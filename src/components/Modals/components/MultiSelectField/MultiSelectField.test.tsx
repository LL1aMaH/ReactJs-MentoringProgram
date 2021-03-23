import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { MultiSelectField } from './MultiSelectField';
import { mockOptions } from './mocks';

describe('MultiSelectField', () => {
  const getComponent = (props = {}) =>
    render(
      <MultiSelectField
        value={mockOptions.slice(0, 2)}
        onChange={jest.fn()}
        options={mockOptions}
        placeholder="placeholder"
        {...props}
      />,
    );

  it('should render correctly', () => {
    expect(getComponent({ options: mockOptions }).asFragment()).toMatchSnapshot();
  });

  it('should call onChange with selected values on select option', () => {
    const testOnChange = jest.fn();
    const { getByLabelText } = getComponent({
      value: [mockOptions[3]],
      onChange: testOnChange,
    });

    fireEvent.click(getByLabelText('Ann'));
    expect(testOnChange).toBeCalledWith([mockOptions[3], mockOptions[0]]);
  });

  it('should call onChange with selected values on unselect option', () => {
    const testOnChange = jest.fn();
    const { getByLabelText } = getComponent({
      value: [mockOptions[3], mockOptions[1], mockOptions[10]],
      onChange: testOnChange,
    });

    fireEvent.click(getByLabelText('Jack'));
    expect(testOnChange).toBeCalledWith([mockOptions[3], mockOptions[10]]);
  });
});
