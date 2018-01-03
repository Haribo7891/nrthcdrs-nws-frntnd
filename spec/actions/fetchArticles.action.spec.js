import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchArticles, {
  fetchArticlesRequest,
  fetchArticlesSuccess,
  fetchArticlesFailure
} from '../../src/actions/fetchArticles';

import { API_URL } from '../../src/config/index';

const mockStore = configureMockStore([thunk]);

describe('Action Creator: fetchArticles', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Dispatches FETCH_ARTICLES_SUCCESS when fetching all articles responds with 200 and data', () => {
    nock(API_URL)
      .get('/articles')
      .reply(200, { articles: [ 1, 2, 3 ] });
      
    const expectedActions = [
      fetchArticlesRequest(),
      fetchArticlesSuccess([ 1, 2, 3 ])
    ];

    const store = mockStore();

    return store.dispatch(fetchArticles())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches FETCH_ARTICLES_FAILURE when fetching all articles responds with an error', () => {
    nock(API_URL)
      .get('/articles')
      .replyWithError({ 'message': 'error' });
      
    const expectedActions = [
      fetchArticlesRequest(),
      fetchArticlesFailure('error')
    ];

    const store = mockStore();

    return store.dispatch(fetchArticles())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
