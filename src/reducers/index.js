import { combineReducers } from 'redux';

import articlesReducer from './articlesReducer';
import commentsReducer from './commentsReducer';
import singleArticleReducer from './singleArticleReducer';
import topicsReducer from './topicsReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  articlesReducer,
  commentsReducer,
  singleArticleReducer,
  topicsReducer,
  userReducer
});

export default reducer;
