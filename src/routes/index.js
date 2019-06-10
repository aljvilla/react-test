import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import WeatherMap from '../containers/WeatherMap';

export default () =>
  <BrowserRouter>
    <Switch>
      <Redirect from="/" exact to="/weather/map" />
      <PublicRoute exact path="/weather/map" component={WeatherMap} />
    </Switch>
  </BrowserRouter>