import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  data: {}
};

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.FETCH_ARTICLES_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: {}
    });
  case types.FETCH_ARTICLES_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
  case types.FETCH_ARTICLES_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });
  case types.FETCH_ARTICLES_BY_TOPIC_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: {}
    });
  case types.FETCH_ARTICLES_BY_TOPIC_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
  case types.FETCH_ARTICLES_BY_TOPIC_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });
  default:
    return prevState;
  }
};
