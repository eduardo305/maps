import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TeamList from './containers/team_list';
import TeamDetail from './containers/team_details';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={TeamList}></IndexRoute>
    <Route path='teams/:teamId' component={TeamDetail} />
  </Route>
);
