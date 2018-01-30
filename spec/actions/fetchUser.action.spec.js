import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import fetchUser, {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../../src/actions/fetchUser';

import { username } from '../utils';

import { API_URL } from '../../src/config/index';

const mockStore = configureMockStore([thunk]);

describe('Action Creator: fetchUser', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Dispatches FETCH_USER_SUCCESS when fetching a user responds with 200 and data', () => {
    nock(API_URL)
      .get(`/users/${ username }`)
      .reply(200, { user: [ 1, 2, 3 ] });
      
    const expectedActions = [
      fetchUserRequest(username),
      fetchUserSuccess([ 1, 2, 3 ])
    ];

    const store = mockStore();

    return store.dispatch(fetchUser(username))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches FETCH_USER_FAILURE when fetching a user responds with an error', () => {
    nock(API_URL)
      .get(`/users/${ username }`)
      .replyWithError({ message: 'error' });
      
    const expectedActions = [
      fetchUserRequest(username),
      fetchUserFailure('error')
    ];

    const store = mockStore();

    return store.dispatch(fetchUser(username))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
