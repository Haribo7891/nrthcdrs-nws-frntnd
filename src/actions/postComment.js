import axios from 'axios';
import * as types from './types';
import { API_URL } from '../config/index';

export const postCommentRequest = (articleId, comment) => ({
  type: types.POST_COMMENT_REQUEST,
  payload: {
    articleId,
    comment
  }
});

export const postCommentSuccess = (data) => ({
  type: types.POST_COMMENT_SUCCESS,
  payload: data
});

export const postCommentFailure = (error) => ({
  type: types.POST_COMMENT_FAILURE,
  payload: error
});

export default (articleId, comment) => {
  return (dispatch) => {
    dispatch(postCommentRequest(articleId, comment));
    return axios.post(`${ API_URL }/articles/${ articleId }/comments`, { comment: comment })
      .then(({ data }) => {
        dispatch(postCommentSuccess([data.comment]));
      })
      .catch((error) => {
        dispatch(postCommentFailure(error.message));
      });
  };
};
