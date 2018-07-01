import React from 'react';
import { object } from 'prop-types';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import { getAboutView } from './About';
import { getHomeView } from './Home';

const RouterProvider = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={getHomeView} />
        <Route path="/about" component={getAboutView} />
      </Switch>
    </ConnectedRouter>
  );
};

RouterProvider.propTypes = {
  history: object.isRequired,
};

export default RouterProvider;
