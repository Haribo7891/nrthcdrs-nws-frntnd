import axios from 'axios';
import * as types from './types';
import { API_URL } from '../config/index';

export const deleteCommentRequest = (commentId) => ({
  type: types.DELETE_COMMENT_REQUEST,
  payload: commentId
});

export const deleteCommentSuccess = (data) => ({
  type: types.DELETE_COMMENT_SUCCESS,
  payload: data
});

export const deleteCommentFailure = (error) => ({
  type: types.DELETE_COMMENT_FAILURE,
  payload: error
});

export default (commentId) => (dispatch) => {
  dispatch(deleteCommentRequest(commentId));
  return axios.delete(`${ API_URL }/comments/${ commentId }`)
    .then((res) => {
      dispatch(deleteCommentSuccess(res.data.comment));
    })
    .catch((error) => {
      dispatch(deleteCommentFailure(error.message));
    });
};
