import React from 'react';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import originalStore from './configureStore';

type TComponentFunc = () => JSX.Element;

const withStore = (componentFunc: TComponentFunc, initialState = {}): JSX.Element => {
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);
  return <Provider store={store}>{componentFunc()}</Provider>;
};

export const withOriginalStore = (componentFunc: TComponentFunc): JSX.Element => {
  return <Provider store={originalStore}>{componentFunc()}</Provider>;
};

export default withStore;
