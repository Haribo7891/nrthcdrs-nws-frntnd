import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import deleteComment, {
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure
} from '../../src/actions/deleteComment';

import { commentId, comment, incorrectCommentId } from '../utils';

import { API_URL } from '../../src/config/index';

const mockStore = configureMockStore([thunk]);

describe('Action Creator: deleteComment', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Dispatches DELETE_COMMENT_SUCCESS when deleting a comment with correct commentId responds with 204 and data', () => {
    nock(API_URL)
      .delete(`/comments/${ commentId }`)
      .reply(204, { comment });
      
    const expectedActions = [
      deleteCommentRequest(commentId),
      deleteCommentSuccess(comment)
    ];

    const store = mockStore();

    return store.dispatch(deleteComment(commentId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches DELETE_COMMENT_FAILURE when deleting a comment with incorrect commentId responds with an error', () => {
    nock(API_URL)
      .delete(`/comments/${ incorrectCommentId }`)
      .replyWithError({ message: 'error' });
      
    const expectedActions = [
      deleteCommentRequest(incorrectCommentId),
      deleteCommentFailure('error')
    ];

    const store = mockStore();

    return store.dispatch(deleteComment(incorrectCommentId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
