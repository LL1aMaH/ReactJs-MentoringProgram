import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { MultiSelectFieldItem } from './MultiSelectFieldItem';

describe('MultiSelectFieldItem', () => {
  const getComponent = (props = {}) =>
    render(
      <MultiSelectFieldItem
        value="test"
        label="label"
        checked
        option="test"
        onChange={jest.fn()}
        onMouseEnter={jest.fn()}
        {...props}
      />,
    );

  it('should render correctly', () => {
    expect(getComponent().asFragment()).toMatchSnapshot();
  });

  it('should call onMouseEnter', () => {
    const testOnMouseEnter = jest.fn();
    const { container } = getComponent({
      onMouseEnter: testOnMouseEnter,
    });

    fireEvent.mouseEnter(container.querySelector('li') as HTMLElement);

    expect(testOnMouseEnter).toBeCalledWith('test');
  });
});
