import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ROUTES, EPath } from './routes';
import store from './store/store';

import './App.css';

const App = (): JSX.Element => (
  <Provider store={store}>
    <Router>
      <Switch>
        {ROUTES.map(({ path, component, exact }) => (
          <Route path={path} exact={exact} component={component} key={path} />
        ))}
        <Redirect to={EPath.NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
