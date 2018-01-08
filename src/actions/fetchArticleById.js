import axios from 'axios';
import * as types from './types';
import { API_URL } from '../config/index';

export const fetchArticleByIdRequest = (articleId) => ({
  type: types.FETCH_ARTICLE_BY_ID_REQUEST,
  payload: articleId
});

export const fetchArticleByIdSuccess = (data) => ({
  type: types.FETCH_ARTICLE_BY_ID_SUCCESS,
  payload: data
});

export const fetchArticleByIdFailure = (error) => ({
  type: types.FETCH_ARTICLE_BY_ID_FAILURE,
  payload: error
});

export default (articleId) => (dispatch) => {
  dispatch(fetchArticleByIdRequest(articleId));
  return axios.get(`${ API_URL }/articles/${ articleId }`)
    .then((res) => {
      dispatch(fetchArticleByIdSuccess(res.data.article));
    })
    .catch((error) => {
      dispatch(fetchArticleByIdFailure(error.message));
    });
};
