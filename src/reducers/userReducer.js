import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  data: {}
};

export default (prevState = initialState, action) => {
  switch (action.type) {
  case types.FETCH_USER_REQUEST:
    return Object.assign({}, prevState, {
      loading: !prevState.loading,
      error: null,
      data: {}
    });
  case types.FETCH_USER_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
  case types.FETCH_USER_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });
  default:
    return prevState;
  }
};
