import { combineReducers } from 'redux';

import generalReducer from './general';

export default combineReducers({
  general: generalReducer
});