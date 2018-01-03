import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './utils/registerServiceWorker';

import { App } from './components';

import './css/index.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
