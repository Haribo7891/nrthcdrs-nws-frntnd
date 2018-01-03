import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  data: {}
};

export default (prevState = initialState, action) => {
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
      data: {}
    });
  case types.DELETE_COMMENT_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
  case types.DELETE_COMMENT_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });
  case types.POST_COMMENT_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: {}
    });
  case types.POST_COMMENT_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
  case types.POST_COMMENT_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });
  case types.PUT_COMMENT_VOTE_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: {}
    });
  case types.PUT_COMMENT_VOTE_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
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
