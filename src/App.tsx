import React from 'react';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { ROUTES, EPath } from './routes';

import './App.css';

const App = (): JSX.Element => (
  <Router>
    <Switch>
      {ROUTES.map(({ path, component, exact }) => (
        <Route path={path} exact={exact} component={component} key={path} />
      ))}
      <Redirect to={EPath.NotFound} />
    </Switch>
  </Router>
);

export default App;
