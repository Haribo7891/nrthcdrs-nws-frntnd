import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchTopics, {
  fetchTopicsRequest,
  fetchTopicsSuccess,
  fetchTopicsFailure
} from '../../src/actions/fetchTopics';

import { API_URL } from '../../src/config/index';

const mockStore = configureMockStore([thunk]);

describe('Action Creator: fetchTopics', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Dispatches FETCH_TOPICS_SUCCESS when fetching topics responds with 200 and data', () => {
    nock(API_URL)
      .get('/topics')
      .reply(200, { topics: [ 1, 2, 3 ] });
      
    const expectedActions = [
      fetchTopicsRequest(),
      fetchTopicsSuccess([ 1, 2, 3 ])
    ];

    const store = mockStore();

    return store.dispatch(fetchTopics())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches FETCH_TOPICS_FAILURE when fetching topics responds with an error', () => {
    nock(API_URL)
      .get('/topics')
      .replyWithError({ 'message': 'error' });
      
    const expectedActions = [
      fetchTopicsRequest(),
      fetchTopicsFailure('error')
    ];

    const store = mockStore();

    return store.dispatch(fetchTopics())
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
