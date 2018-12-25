import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'component/Home';
import NotFound from 'component/NotFound';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default App;
