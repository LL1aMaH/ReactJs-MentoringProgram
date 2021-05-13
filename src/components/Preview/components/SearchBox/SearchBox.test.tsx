import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import withRouter from '../../../../../utils/decorators/withRouter';

import { SearchBox } from './SearchBox';

describe('SearchBox', () => {
  it('renders correctly', () => {
    const component = render(withRouter(() => <SearchBox />));
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should correctly change input value', () => {
    const component = render(withRouter(() => <SearchBox />));

    const input = component.getByPlaceholderText('What do you want to watch?');
    const button = component.getByTestId('button');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(button);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should correctly without change input value', () => {
    const component = render(withRouter(() => <SearchBox />));

    const input = component.getByPlaceholderText('What do you want to watch?');
    const button = component.getByTestId('button');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.click(button);

    expect(component.asFragment()).toMatchSnapshot();
  });
});
