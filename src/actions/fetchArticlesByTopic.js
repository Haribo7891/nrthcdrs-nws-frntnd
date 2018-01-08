import axios from 'axios';
import * as types from './types';
import { API_URL } from '../config/index';

export const fetchArticlesByTopicRequest = (topic) => ({
  type: types.FETCH_ARTICLES_BY_TOPIC_REQUEST,
  payload: topic
});

export const fetchArticlesByTopicSuccess = (data) => ({
  type: types.FETCH_ARTICLES_BY_TOPIC_SUCCESS,
  payload: data
});

export const fetchArticlesByTopicFailure = (error) => ({
  type: types.FETCH_ARTICLES_BY_TOPIC_FAILURE,
  payload: error
});

export default (topic) => (dispatch) => {
  dispatch(fetchArticlesByTopicRequest(topic));
  return axios.get(`${ API_URL }/topics/${ topic }/articles`)
    .then((res) => {
      return res.data.articles.sort((a, b) => {
        return b.votes - a.votes;
      });
    })
    .then((sortedArticles) => {
      dispatch(fetchArticlesByTopicSuccess(sortedArticles));
    })
    .catch((error) => {
      dispatch(fetchArticlesByTopicFailure(error.message));
    });
};
