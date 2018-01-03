import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import registerServiceWorker from './utils/registerServiceWorker';

import { App } from './components';

import './css/index.css';
import 'bootswatch/dist/sketchy/bootstrap.min.css';

ReactDOM.render(
  <Provider store={ store } >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
