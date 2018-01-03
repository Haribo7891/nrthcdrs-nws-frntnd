import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { NoMatch } from '../components';

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/*' component={ NoMatch } />
      </Switch>
    );
  }
}

export default App;
