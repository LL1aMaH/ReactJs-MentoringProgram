import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { MultiSelectFieldOptions } from './MultiSelectFieldOptions';
import { mockOptions } from '../../mocks';

describe('MultiSelectFieldOptions', () => {
  const getComponent = (props = {}) =>
    render(
      <MultiSelectFieldOptions
        valueMap={[]}
        options={mockOptions.slice(0, 3)}
        onChange={jest.fn()}
        {...props}
      />,
    );

  it('should render correctly', () => {
    expect(getComponent().asFragment()).toMatchSnapshot();
  });

  it('should show description on mouse enter', () => {
    const { container, getByText } = getComponent({ renderDescription: () => 'description' });

    fireEvent.mouseEnter(container.querySelector('li') as HTMLElement);

    expect(getByText('description')).not.toBeNull();
  });
});
