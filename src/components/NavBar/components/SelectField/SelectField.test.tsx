import React from 'react';
import renderer from 'react-test-renderer';

import { fireEvent, render, cleanup } from '@testing-library/react';

import { SORT_BY } from 'Consts/index';
import { SelectField } from './SelectField';

describe('SelectField component', () => {
  const getComponent = (
    { options = SORT_BY, onChange = jest.fn(), disabled = false }: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  ) => <SelectField options={options} onChange={onChange} disabled={disabled} />;

  afterEach(cleanup);

  it('renders correctly', () => {
    const componentJSON = renderer.create(getComponent({})).toJSON();
    expect(componentJSON).toMatchSnapshot();
  });

  it('renders open/close dropdown', () => {
    const container = render(getComponent({}));
    const { getByTestId, asFragment } = container;
    const triggerToOpenSelectField: HTMLElement = getByTestId('selectButton');

    // open dropdown
    fireEvent.click(triggerToOpenSelectField);
    expect(asFragment()).toMatchSnapshot();

    // close dropdown
    fireEvent.click(container.container);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders choose option', () => {
    const container = render(getComponent({}));
    const { getByText, getByTestId } = container;
    const selected: HTMLElement = getByTestId('selectButton');

    fireEvent.click(selected);
    const selectedValue = 'FILTER';
    const triggerToOpenSelectField: HTMLElement = getByText(selectedValue);

    fireEvent.click(triggerToOpenSelectField);

    expect(selected.textContent).toBe('FILTER');
  });

  it('does not open dropdown box on disabled component', () => {
    const { getByText, asFragment } = render(getComponent({ disabled: true }));

    fireEvent.click(getByText('FILTER'));

    expect(asFragment()).toMatchSnapshot();
  });

  it('calls change handler by clicking on dropdown item', () => {
    const handleChange = jest.fn();
    const { getByText } = render(getComponent({ onChange: handleChange }));

    fireEvent.click(getByText(SORT_BY[1]));

    expect(handleChange).toHaveBeenCalledWith(SORT_BY[1]);
  });
});
