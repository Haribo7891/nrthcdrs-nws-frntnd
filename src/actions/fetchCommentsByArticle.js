import axios from 'axios';
import * as types from './types';
import { API_URL } from '../config/index';

export const fetchCommentsByArticleRequest = (articleId) => ({
  type: types.FETCH_COMMENTS_BY_ARTICLE_REQUEST,
  payload: articleId
});

export const fetchCommentsByArticleSuccess = (data) => ({
  type: types.FETCH_COMMENTS_BY_ARTICLE_SUCCESS,
  payload: data
});

export const fetchCommentsByArticleFailure = (error) => ({
  type: types.FETCH_COMMENTS_BY_ARTICLE_FAILURE,
  payload: error
});

export default (articleId) => (dispatch) => {
  dispatch(fetchCommentsByArticleRequest(articleId));
  return axios.get(`${ API_URL }/articles/${ articleId }/comments`)
    .then((res) => {
      return res.data.comments.sort((a, b) => {
        return b.votes - a.votes;
      });
    })
    .then((sortedComments) => {
      dispatch(fetchCommentsByArticleSuccess(sortedComments));
    })
    // .then((res) => {
    //   dispatch(fetchCommentsByArticleSuccess(res.data.comments));
    // })
    .catch((error) => {
      dispatch(fetchCommentsByArticleFailure(error.message));
    });
};
