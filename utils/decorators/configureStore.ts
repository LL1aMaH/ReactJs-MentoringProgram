import { configureStore } from '@reduxjs/toolkit';

import searchReducer from '../../src/store/reducer';

const store = configureStore({
  reducer: {
    searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
export default store;
