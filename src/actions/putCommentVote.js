import axios from 'axios';
import * as types from './types';
import { API_URL } from '../config/index';

export const putCommentVoteRequest = (commentId, vote) => ({
  type: types.PUT_COMMENT_VOTE_REQUEST,
  payload: {
    commentId,
    vote
  }
});

export const putCommentVoteSuccess = (data) => ({
  type: types.PUT_COMMENT_VOTE_SUCCESS,
  payload: data
});

export const putCommentVoteFailure = (error) => ({
  type: types.PUT_COMMENT_VOTE_FAILURE,
  payload: error
});

export default (commentId, vote) => (dispatch) => {
  dispatch(putCommentVoteRequest(commentId, vote));
  return axios.put(`${ API_URL }/comments/${ commentId }?vote=${ vote }`)
    .then((res) => {
      dispatch(putCommentVoteSuccess(res.data.comment));
    })
    .catch((error) => {
      dispatch(putCommentVoteFailure(error.message));
    });
};
