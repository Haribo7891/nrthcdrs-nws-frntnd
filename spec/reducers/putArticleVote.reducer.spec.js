import { expect } from 'chai';
import putArticleVoteReducer, { initialState } from '../../src/reducers/articlesReducer';
import {
  putArticleVoteRequest,
  putArticleVoteSuccess,
  putArticleVoteFailure
} from '../../src/actions/putArticleVote';

import {
  articleId,
  voteUp
} from '../utils';

describe('Reducer: putArticleVote', () => {
  describe('Default behaviour', () => {
    it('Returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'some action' };
      const newState = putArticleVoteReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('Uses the initial state if no previous state is passed', () => {
      const action = { type: 'some action' };
      const newState = putArticleVoteReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('Handles PUT_ARTICLE_VOTE_REQUEST correctly', () => {
    const action = putArticleVoteRequest(articleId, voteUp);
    const newState = putArticleVoteReducer(undefined, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql({ votes: undefined });
  });
  it('Handles PUT_ARTICLE_VOTE_SUCCESS correctly', () => {
    const prevState = putArticleVoteReducer(undefined, putArticleVoteRequest(articleId, voteUp));
    const data = [ 1, 2, 3 ];
    const action = putArticleVoteSuccess(data);
    const newState = putArticleVoteReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('Handles PUT_ARTICLE_VOTE_FAILURE correctly', () => {
    const prevState = putArticleVoteReducer(undefined, putArticleVoteRequest());
    const error = 'Something went wrong';
    const action = putArticleVoteFailure(error);
    const newState = putArticleVoteReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql({});
  });
});
