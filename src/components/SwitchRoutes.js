import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NoMatch } from '../components';
import { Homepage, ArticlesByTopic, ArticlePage, User } from '../containers';

const SwitchRoutes = () => (
  <Switch>
    <Route exact path='/' component={ Homepage } />
    <Route exact path='/topics/:topic/articles' component={ ArticlesByTopic } />
    <Route exact path='/articles/:articleId' component={ ArticlePage } />
    <Route exact path='/user/:username' component={ User } />
    <Route exact path='/*' component={ NoMatch } />
  </Switch>
);

export default SwitchRoutes;
