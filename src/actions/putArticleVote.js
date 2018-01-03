import axios from 'axios';
import * as types from './types';
import { API_URL } from '../config/index';

export const putArticleVoteRequest = (articleId, vote) => ({
  type: types.PUT_ARTICLE_VOTE_REQUEST,
  payload: {
    articleId,
    vote
  }
});

export const putArticleVoteSuccess = (data) => ({
  type: types.PUT_ARTICLE_VOTE_SUCCESS,
  payload: data
});

export const putArticleVoteFailure = (error) => ({
  type: types.PUT_ARTICLE_VOTE_FAILURE,
  payload: error
});

export default (articleId, vote) => {
  return (dispatch) => {
    dispatch(putArticleVoteRequest(articleId, vote));
    return axios.put(`${ API_URL }/articles/${ articleId }?vote=${ vote }`)
      .then((res) => {
        dispatch(putArticleVoteSuccess(res.data.article));
      })
      .catch((error) => {
        dispatch(putArticleVoteFailure(error.message));
      });
  };
};
