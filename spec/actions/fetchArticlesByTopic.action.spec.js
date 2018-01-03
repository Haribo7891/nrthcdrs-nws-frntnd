import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchArticlesByTopic, {
  fetchArticlesByTopicRequest,
  fetchArticlesByTopicSuccess,
  fetchArticlesByTopicFailure
} from '../../src/actions/fetchArticlesByTopic';

import { topic } from '../utils';

import { API_URL } from '../../src/config/index';

const mockStore = configureMockStore([thunk]);

describe('Action Creator: fetchArticlesByTopic', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Dispatches FETCH_ARTICLES_BY_TOPIC_SUCCESS when fetching articles by topic responds with 200 and data', () => {
    nock(API_URL)
      .get(`/topics/${ topic }/articles`)
      .reply(200, { articles: [ 1, 2, 3 ] });
      
    const expectedActions = [
      fetchArticlesByTopicRequest(topic),
      fetchArticlesByTopicSuccess([ 1, 2, 3 ])
    ];

    const store = mockStore();

    return store.dispatch(fetchArticlesByTopic(topic))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches FETCH_ARTICLES_BY_TOPIC_FAILURE when fetching articles by topic responds with an error', () => {
    nock(API_URL)
      .get(`/topics/${ topic }/articles`)
      .replyWithError({ 'message': 'error' });
      
    const expectedActions = [
      fetchArticlesByTopicRequest(topic),
      fetchArticlesByTopicFailure('error')
    ];

    const store = mockStore();

    return store.dispatch(fetchArticlesByTopic(topic))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
