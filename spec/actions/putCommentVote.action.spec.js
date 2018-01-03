import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import putCommentVote, {
  putCommentVoteRequest,
  putCommentVoteSuccess,
  putCommentVoteFailure
} from '../../src/actions/putCommentVote';

import {
  commentId,
  voteUp,
  voteDown,
  commentBody,
  incorrectCommentId
} from '../utils';

import { API_URL } from '../../src/config/index';

const mockStore = configureMockStore([thunk]);

describe('Action Creator: putCommentVote', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Dispatches PUT_COMMENT_VOTE_SUCCESS when voting a comment UP responds with 200 and data', () => {
    const comment = {
      _id: commentId,
      body: commentBody,
      votes: 1
    };
    nock(API_URL)
      .put(`/comments/${ commentId }?vote=${ voteUp }`)
      .reply(200, { comment });
      
    const expectedActions = [
      putCommentVoteRequest(commentId, voteUp),
      putCommentVoteSuccess(comment)
    ];

    const store = mockStore();

    return store.dispatch(putCommentVote(commentId, voteUp))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches PUT_COMMENT_VOTE_SUCCESS when voting a comment DOWN responds with 200 and data', () => {
    const comment = {
      _id: commentId,
      body: commentBody,
      votes: 0
    };
    nock(API_URL)
      .put(`/comments/${ commentId }?vote=${ voteDown }`)
      .reply(200, { comment });
      
    const expectedActions = [
      putCommentVoteRequest(commentId, voteDown),
      putCommentVoteSuccess(comment)
    ];

    const store = mockStore();

    return store.dispatch(putCommentVote(commentId, voteDown))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches PUT_COMMENT_VOTE_FAILURE when voting a comment responds with an error', () => {
    nock(API_URL)
      .put(`/comments/${ incorrectCommentId }?vote=${ voteUp }`)
      .replyWithError({ 'message': 'error' });
      
    const expectedActions = [
      putCommentVoteRequest(incorrectCommentId, voteUp),
      putCommentVoteFailure('error')
    ];

    const store = mockStore();

    return store.dispatch(putCommentVote(incorrectCommentId, voteUp))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
