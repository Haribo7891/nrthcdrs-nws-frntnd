import { combineReducers } from 'redux';

import articlesReducer from './articlesReducer';
import topicsReducer from './topicsReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  articlesReducer,
  topicsReducer,
  userReducer
});

export default reducer;
