import { expect } from 'chai';
import postCommentReducer, { initialState } from '../../src/reducers/commentsReducer';
import {
  postCommentRequest,
  postCommentSuccess,
  postCommentFailure
} from '../../src/actions/postComment';

import {
  articleId,
  comment
} from '../utils';

describe('Reducer: postComment', () => {
  describe('Default behaviour', () => {
    it('Returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'some action' };
      const newState = postCommentReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('Uses the initial state if no previous state is passed', () => {
      const action = { type: 'some action' };
      const newState = postCommentReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('Handles POST_COMMENT_REQUEST correctly', () => {
    const action = postCommentRequest(articleId, comment);
    const newState = postCommentReducer(undefined, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql({});
  });
  it('Handles POST_COMMENT_SUCCESS correctly', () => {
    const prevState = postCommentReducer(undefined, postCommentRequest(articleId, comment));
    const data = [ 1, 2, 3 ];
    const action = postCommentSuccess(data);
    const newState = postCommentReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('Handles POST_COMMENT_FAILURE correctly', () => {
    const prevState = postCommentReducer(undefined, postCommentRequest());
    const error = 'Something went wrong';
    const action = postCommentFailure(error);
    const newState = postCommentReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql({});
  });
});
