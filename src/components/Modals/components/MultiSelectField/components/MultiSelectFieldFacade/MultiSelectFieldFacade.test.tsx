import React from 'react';
import { render } from '@testing-library/react';

import { MultiSelectFieldFacade } from './MultiSelectFieldFacade';

describe('MultiSelectFieldFacade', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MultiSelectFieldFacade onClick={jest.fn()}>children</MultiSelectFieldFacade>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
