import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  data: {}
};

export default (prevState = initialState, action) => {
  
  switch (action.type) {
  case types.FETCH_ARTICLE_BY_ID_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: prevState.data
    });
  case types.FETCH_ARTICLE_BY_ID_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
  case types.FETCH_ARTICLE_BY_ID_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });
  case types.PUT_ARTICLE_VOTE_REQUEST:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: prevState.data
    });
  case types.PUT_ARTICLE_VOTE_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
  case types.PUT_ARTICLE_VOTE_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });
  default:
    return prevState;
  }
};
