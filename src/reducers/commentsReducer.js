import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  data: []
};

export default (prevState = initialState, action) => {  
  switch (action.type) {
  case types.FETCH_COMMENTS_BY_ARTICLE_REQUEST:
    return Object.assign({}, prevState, {
      loading: true,
      error: null,
      data: prevState.data
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
      data: []
    });
  case types.DELETE_COMMENT_REQUEST:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: prevState.data
    });
  case types.DELETE_COMMENT_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: prevState.data.filter((comment) => comment._id !== action.payload._id)
    });
  case types.DELETE_COMMENT_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
  case types.POST_COMMENT_REQUEST:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: prevState.data
    });
  case types.POST_COMMENT_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: prevState.data.concat(action.payload)
    });
  case types.POST_COMMENT_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
  case types.PUT_COMMENT_VOTE_REQUEST:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: prevState.data
    });
  case types.PUT_COMMENT_VOTE_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: prevState.data.filter((data) => data !== undefined).map((comment) => {
        if (comment._id === action.payload._id) comment.votes = action.payload.votes;
        return comment;
      })
    });
  case types.PUT_COMMENT_VOTE_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: []
    });
  default:
    return prevState;
  }
};
