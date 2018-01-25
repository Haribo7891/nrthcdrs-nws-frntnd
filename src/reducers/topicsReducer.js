import * as types from '../actions/types';

export const initialState = {
  loading: false,
  error: null,
  data: {}
};

export default (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
  case types.FETCH_TOPICS_REQUEST:
    newState.loading = true;
    newState.error = null;
    newState.data = Object.assign({}, prevState.data);
    return newState;
  case types.FETCH_TOPICS_SUCCESS:
    return Object.assign({}, prevState, {
      loading: false,
      error: null,
      data: action.payload
    });
  case types.FETCH_TOPICS_FAILURE:
    return Object.assign({}, prevState, {
      loading: false,
      error: action.payload,
      data: {}
    });
  default:
    return prevState;
  }
};
