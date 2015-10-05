/* @flow */

import { combineReducers } from "redux";
import {
  REQUEST_DATA,
  RECEIVE_DATA
} from "../actions";

const data = (state = {
  isFetching: false,
  message: []
}, action) => {
  switch (action.type) {
  case REQUEST_DATA:
    return Object.assign({}, state, {
      isFetching: true
    });
  case RECEIVE_DATA:
    return Object.assign({}, state, {
      isFetching: false,
      message: action.data.message
    });
  default:
    return state;
  }
};

const rootReducer = combineReducers({
  data
});

export default rootReducer;
