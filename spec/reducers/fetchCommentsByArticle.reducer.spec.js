import { expect } from 'chai';
import fetchCommentsByArticleReducer, { initialState } from '../../src/reducers/commentsReducer';
import {
  fetchCommentsByArticleRequest,
  fetchCommentsByArticleSuccess,
  fetchCommentsByArticleFailure
} from '../../src/actions/fetchCommentsByArticle';

import { articleId } from '../utils';

describe('Reducer: fetchCommentsByArticle', () => {
  describe('Default behaviour', () => {
    it('Returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchCommentsByArticleReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('Uses the initial state if no previous state is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchCommentsByArticleReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('Handles FETCH_COMMENTS_BY_ARTICLE_REQUEST correctly', () => {
    const action = fetchCommentsByArticleRequest(articleId);
    const newState = fetchCommentsByArticleReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql({});
  });
  it('Handles FETCH_COMMENTS_BY_ARTICLE_SUCCESS correctly', () => {
    const prevState = fetchCommentsByArticleReducer(undefined, fetchCommentsByArticleRequest(articleId));
    const data = [ 1, 2, 3 ];
    const action = fetchCommentsByArticleSuccess(data);
    const newState = fetchCommentsByArticleReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('Handles FETCH_COMMENTS_BY_ARTICLE_FAILURE correctly', () => {
    const prevState = fetchCommentsByArticleReducer(undefined, fetchCommentsByArticleRequest());
    const error = 'Something went wrong';
    const action = fetchCommentsByArticleFailure(error);
    const newState = fetchCommentsByArticleReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql({});
  });
});
