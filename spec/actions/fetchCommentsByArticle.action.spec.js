import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchCommentsByArticle, {
  fetchCommentsByArticleRequest,
  fetchCommentsByArticleSuccess,
  fetchCommentsByArticleFailure
} from '../../src/actions/fetchCommentsByArticle';

import { articleId } from '../utils';

import { API_URL } from '../../src/config/index';

const mockStore = configureMockStore([thunk]);

describe('Action Creator: fetchCommentsByArticle', () => {    
  afterEach(() => {
    nock.cleanAll();
  });
  it('Dispatches FETCH_COMMENTS_BY_ARTICLE_SUCCESS when fetching comments by article responds with 200 and data', () => {
    nock(API_URL)
      .get(`/articles/${ articleId }/comments`)
      .reply(200, { comments: [ 1, 2, 3 ] });
      
    const expectedActions = [
      fetchCommentsByArticleRequest(articleId),
      fetchCommentsByArticleSuccess([ 1, 2, 3 ])
    ];

    const store = mockStore();

    return store.dispatch(fetchCommentsByArticle(articleId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches FETCH_COMMENTS_BY_ARTICLE_FAILURE when fetching comments by article responds with an error', () => {
    nock(API_URL)
      .get(`/articles/${ articleId }/comments`)
      .replyWithError({ 'message': 'error' });
      
    const expectedActions = [
      fetchCommentsByArticleRequest(articleId),
      fetchCommentsByArticleFailure('error')
    ];

    const store = mockStore();

    return store.dispatch(fetchCommentsByArticle(articleId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
