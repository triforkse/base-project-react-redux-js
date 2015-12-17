import { DO_FOO } from '../actions';

export function foo(state = { value: null }, action = {}) {
  switch (action.type) {
  case DO_FOO:
    return Object.assign({}, state, {value: action.data.toUpperCase()});

  default:
    return state;
  }
}
