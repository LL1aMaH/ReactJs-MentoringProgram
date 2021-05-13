import React from 'react';

import { render } from '@testing-library/react';

import { SuccessfulAddMovieModal } from './SuccessfulAddMovieModal';

describe('SuccessfulAddMovieModal', () => {
  it('renders correctly', () => {
    const getComponent = () => render(<SuccessfulAddMovieModal />);
    expect(getComponent().asFragment()).toMatchSnapshot();
  });
});
