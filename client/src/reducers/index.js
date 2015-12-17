import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { apiStatus } from './api';

import { foo } from './foo.js';

const reducers = {
  apiStatus,
  foo,
  router: routerStateReducer,
};

export default combineReducers(reducers);
