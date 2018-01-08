import axios from 'axios';
import * as types from './types';
import { API_URL } from '../config/index';

export const fetchArticlesRequest = () => ({
  type: types.FETCH_ARTICLES_REQUEST
});

export const fetchArticlesSuccess = (data) => ({
  type: types.FETCH_ARTICLES_SUCCESS,
  payload: data
});

export const fetchArticlesFailure = (error) => ({
  type: types.FETCH_ARTICLES_FAILURE,
  payload: error
});

export default () => (dispatch) => {
  dispatch(fetchArticlesRequest());
  return axios.get(`${ API_URL }/articles`)
    .then((res) => {
      return res.data.articles.sort((a, b) => {
        return b.votes - a.votes;
      });
    })
    .then((sortedArticles) => {
      dispatch(fetchArticlesSuccess(sortedArticles));
    })
    .catch((error) => {
      dispatch(fetchArticlesFailure(error.message));
    });
};
