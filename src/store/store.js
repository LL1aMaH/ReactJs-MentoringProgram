import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';

let store;

const initStore = (initialState)=>createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export const initialStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined
  }
  if (typeof window === 'undefined') return _store
  if (!store) store = _store
  return _store
}
export const useStore = (initialState) => {
  const store = useMemo(() => initialStore(initialState), [initialState])
  return store
}

export default store;
