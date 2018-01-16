import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  data: {}
};

export default (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);
  
  switch (action.type) {
  case types.FETCH_COMMENTS_BY_ARTICLE_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: {}
    });

  case types.FETCH_COMMENTS_BY_ARTICLE_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });

  case types.FETCH_COMMENTS_BY_ARTICLE_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });

  case types.DELETE_COMMENT_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: prevState.data
    });

  case types.DELETE_COMMENT_SUCCESS:
    newState.loading = false;
    newState.error = null;
    newState.data = Object.values(prevState.data).filter((comment) => comment._id !== action.payload);
    return newState;

  case types.DELETE_COMMENT_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });

  case types.POST_COMMENT_REQUEST:
    newState.loading = false;
    newState.error = null;
    newState.data = Object.assign({}, prevState.data);
    return newState;
    
  case types.POST_COMMENT_SUCCESS:
    newState.loading = false;
    newState.error = null;
    newState.data = Object.assign({}, prevState.data);
    newState.data = action.payload;
    return newState;
  
  case types.POST_COMMENT_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });

  case types.PUT_COMMENT_VOTE_REQUEST:
    newState.data = Object.assign({}, prevState.data);
    newState.data[action.payload._id] = action.payload.votes;
    return newState;

  case types.PUT_COMMENT_VOTE_SUCCESS:
    const comments = action.payload;
    newState.loading = false;
    newState.error = null;
    newState.data = Object.values(prevState.data).filter((data) => data !== undefined).map((comment) => {
      if (comment._id === comments._id) comment.votes = comments.votes;
      return comment;
    });
    return newState;

  case types.PUT_COMMENT_VOTE_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });
    
  default:
    return prevState;
  }
};
