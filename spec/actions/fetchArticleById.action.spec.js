import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchArticleById, {
  fetchArticleByIdRequest,
  fetchArticleByIdSuccess,
  fetchArticleByIdFailure
} from '../../src/actions/fetchArticleById';

import { articleId, incorrectArticleId, article } from '../utils';

import { API_URL } from '../../src/config/index';

const mockStore = configureMockStore([thunk]);

describe('Action Creator: fetchArticleById', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Dispatches FETCH_ARTICLE_BY_ID_SUCCESS when fetching all articles responds with 200 and data', () => {
    nock(API_URL)
      .get(`/articles/${ articleId }`)
      .reply(200, { article });
      
    const expectedActions = [
      fetchArticleByIdRequest(articleId),
      fetchArticleByIdSuccess(article)
    ];

    const store = mockStore();

    return store.dispatch(fetchArticleById(articleId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches FETCH_ARTICLE_BY_ID_FAILURE when fetching all articles responds with an error', () => {
    nock(API_URL)
      .get(`/articles/${ incorrectArticleId }`)
      .replyWithError({ message: 'error' });
      
    const expectedActions = [
      fetchArticleByIdRequest(incorrectArticleId),
      fetchArticleByIdFailure('error')
    ];

    const store = mockStore();

    return store.dispatch(fetchArticleById(incorrectArticleId))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
