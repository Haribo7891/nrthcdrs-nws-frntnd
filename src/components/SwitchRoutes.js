import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { NoMatch } from '../components';
import { User, Homepage, ArticlesByTopic, ArticlePage } from '../containers';

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route exact path='/topics/:topic/articles' component={ ArticlesByTopic } />
        <Route exact path='/articles/:articleId/comments' component={ ArticlePage } />
        <Route exact path='/user/:username' component={ User } />
        <Route exact path='/*' component={ NoMatch } />
      </Switch>
    );
  }
}

export default App;
