import { expect } from 'chai';
import deleteCommentReducer, { initialState } from '../../src/reducers/commentsReducer';
import {
  deleteCommentRequest,
  deleteCommentSuccess,
  deleteCommentFailure
} from '../../src/actions/deleteComment';

import { commentId } from '../utils';

describe('Reducer: deleteComment', () => {
  describe('Default behaviour', () => {
    it('Returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'some action' };
      const newState = deleteCommentReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('Uses the initial state if no previous state is passed', () => {
      const action = { type: 'some action' };
      const newState = deleteCommentReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('Handles DELETE_COMMENT_REQUEST correctly', () => {
    const prevState = deleteCommentReducer(undefined, deleteCommentRequest(commentId));
    const action = deleteCommentRequest(commentId);
    const newState = deleteCommentReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('Handles DELETE_COMMENT_SUCCESS correctly', () => {
    const prevState = deleteCommentReducer(undefined, deleteCommentRequest(commentId));
    const data = [];
    const action = deleteCommentSuccess(data);
    const newState = deleteCommentReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('Handles DELETE_COMMENT_FAILURE correctly', () => {
    const prevState = deleteCommentReducer(undefined, deleteCommentRequest());
    const error = 'Something went wrong';
    const action = deleteCommentFailure(error);
    const newState = deleteCommentReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});
