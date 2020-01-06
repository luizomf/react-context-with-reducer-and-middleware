import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Home from '../pages/Home';
import Closed from '../pages/Closed';
import Login from '../pages/Login';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/closed/" component={Closed} isClosed />
      <MyRoute exact path="/login/" component={Login} />
    </Switch>
  );
}
