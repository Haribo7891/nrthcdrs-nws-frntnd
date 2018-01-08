import axios from 'axios';
import * as types from './types';
import { API_URL } from '../config/index';

export const fetchTopicsRequest = () => ({
  type: types.FETCH_TOPICS_REQUEST
});

export const fetchTopicsSuccess = (data) => ({
  type: types.FETCH_TOPICS_SUCCESS,
  payload: data
});

export const fetchTopicsFailure = (error) => ({
  type: types.FETCH_TOPICS_FAILURE,
  payload: error
});

export default () => (dispatch) => {
  dispatch(fetchTopicsRequest());
  return axios.get(`${ API_URL }/topics`)
    .then((res) => {
      return res.data.topics.sort((a, b) => {
        return a.slug - b.slug;
      });
    })
    .then((sortedTopics) => {
      dispatch(fetchTopicsSuccess(sortedTopics));
    })
    .catch((error) => {
      dispatch(fetchTopicsFailure(error.message));
    });
};
