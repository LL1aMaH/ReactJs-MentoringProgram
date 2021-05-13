import React from 'react';
import { render } from '@testing-library/react';

import getFormDecorator from '../../../utils/decorators/withForm';

import { InputField } from './InputField';

describe('InputField', () => {
  const withForm = getFormDecorator({ initialValues: { test: 'test' } });
  it('renders correctly', () => {
    const getComponent = () => render(withForm(() => <InputField />));

    expect(getComponent().asFragment()).toMatchSnapshot();
  });

  it('renders correctly with error', () => {
    const getComponent = () => render(withForm(() => <InputField error="error" />));

    expect(getComponent().asFragment()).toMatchSnapshot();
  });
});
