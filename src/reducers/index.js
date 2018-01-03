import { combineReducers } from 'redux';

import topicsReducer from './topicsReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  topicsReducer,
  userReducer
});

export default reducer;
