/*
 * This is the entry-point for the client (defined in webpack.config.js)
 * It will fetch the App component from ./containers and render that as the base route ("/")
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools'; // eslint-disable-line
import { ReduxRouter } from 'redux-router';

import configureStore from './store/configureStore';

const store = configureStore();

render(
  <div>
    <Provider store={store}>
      <ReduxRouter />
    </Provider>
  </div>,
  document.getElementById('app')
);
