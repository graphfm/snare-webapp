import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Podcast from 'component/Podcast';
import Home from 'component/Home';
import NotFound from 'component/NotFound';
import { Provider as AudioPlayerProvider } from 'context/AudioPlayer';

class App extends Component {
  render() {
    return (
      <AudioPlayerProvider>
        <Switch>
          <Route exact path='/podcast/:id' component={Podcast} />
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </AudioPlayerProvider>
    );
  }
}

export default App;
