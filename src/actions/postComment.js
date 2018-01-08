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

export default (articleId, comment) => (dispatch) => {
  dispatch(postCommentRequest(articleId, comment));
  return axios.post(`${ API_URL }/articles/${ articleId }/comments`, { comment })
    .then((res) => {
      dispatch(postCommentSuccess(res.data.comment));
    })
    .catch((error) => {
      dispatch(postCommentFailure(error.message));
    });
};
