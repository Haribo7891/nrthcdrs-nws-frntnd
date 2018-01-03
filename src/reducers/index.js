import { combineReducers } from 'redux';

import articlesReducer from './articlesReducer';
import commentsReducer from './commentsReducer';
import topicsReducer from './topicsReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  articlesReducer,
  commentsReducer,
  topicsReducer,
  userReducer
});

export default reducer;
