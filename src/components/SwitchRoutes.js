import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { NoMatch } from '../components';
import { User } from '../containers';

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/user/:username' component={ User } />
        <Route exact path='/*' component={ NoMatch } />
      </Switch>
    );
  }
}

export default App;
