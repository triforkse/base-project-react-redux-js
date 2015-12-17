import * as api from '../api-client';

export const API_STATUS_REQUESTED = 'API_STATUS_REQUESTED';
export const API_STATUS_RECEIVED = 'API_STATUS_RECEIVED';
export const DO_FOO = 'DO_FOO';

export function requestApiStatus() {
  return {
    type: API_STATUS_REQUESTED,
  };
}

export function respondWithApiStatus(data) {
  return {
    type: API_STATUS_RECEIVED,
    data,
  };
}

export function checkApi() {
  return dispatch => {
    dispatch(requestApiStatus());
    api.fetchStatus(data => dispatch(respondWithApiStatus(data)));
  };
}

export function doFoo(payload) {
  return {
    type: DO_FOO,
    data: payload,
  };
}

export function doAsyncFoo() {
  return dispatch => {
    api.doFoo(data => dispatch(doFoo(data)));
  };
}

