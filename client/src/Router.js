import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
