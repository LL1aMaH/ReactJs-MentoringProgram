import React from 'react';
import { render } from 'react-dom';

import { AppContainer as HotLoaderContainer } from 'react-hot-loader';

import App from './App';

render(
  <HotLoaderContainer>
    <App />
  </HotLoaderContainer>,
  document.getElementById('root'),
);
