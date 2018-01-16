import { expect } from 'chai';
import putCommentVoteReducer, { initialState } from '../../src/reducers/commentsReducer';
import {
  putCommentVoteRequest,
  putCommentVoteSuccess,
  putCommentVoteFailure
} from '../../src/actions/putCommentVote';

import {
  commentId,
  voteUp
} from '../utils';

describe('Reducer: putCommentVote', () => {
  describe('Default behaviour', () => {
    it('Returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'some action' };
      const newState = putCommentVoteReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('Uses the initial state if no previous state is passed', () => {
      const action = { type: 'some action' };
      const newState = putCommentVoteReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('Handles PUT_COMMENT_VOTE_REQUEST correctly', () => {
    const action = putCommentVoteRequest(commentId, voteUp);
    const newState = putCommentVoteReducer(undefined, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql({ undefined });
  });
  it('Handles PUT_COMMENT_VOTE_SUCCESS correctly', () => {
    const prevState = putCommentVoteReducer(undefined, putCommentVoteRequest(commentId, voteUp));
    const data = [ 1, 2, 3 ];
    const action = putCommentVoteSuccess(data);
    const newState = putCommentVoteReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('Handles PUT_COMMENT_VOTE_FAILURE correctly', () => {
    const prevState = putCommentVoteReducer(undefined, putCommentVoteRequest());
    const error = 'Something went wrong';
    const action = putCommentVoteFailure(error);
    const newState = putCommentVoteReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql({});
  });
});
