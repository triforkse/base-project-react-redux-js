import { combineReducers } from 'redux';
import { apiStatus } from './api';
import { routerStateReducer } from 'redux-router';

const reducers = {
  apiStatus,
  router: routerStateReducer,
};

export default combineReducers(reducers);
