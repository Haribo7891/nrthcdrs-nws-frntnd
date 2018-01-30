import axios from 'axios';
import * as types from './types';
import { API_URL } from '../config/index';

export const fetchUserRequest = (username) => ({
  type: types.FETCH_USER_REQUEST,
  payload: username
});

export const fetchUserSuccess = (data) => ({
  type: types.FETCH_USER_SUCCESS,
  payload: data
});

export const fetchUserFailure = (error) => ({
  type: types.FETCH_USER_FAILURE,
  payload: error
});

export default (username) => (dispatch) => {
  dispatch(fetchUserRequest(username));
  return axios.get(`${ API_URL }/users/${ username }`)
    .then((res) => {
      dispatch(fetchUserSuccess(res.data.user));
    })
    .catch((error) => {
      dispatch(fetchUserFailure(error.message));
    });
};
