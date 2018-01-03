import { expect } from 'chai';
import fetchUserReducer, { initialState } from '../../src/reducers/userReducer';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from '../../src/actions/fetchUser';

import { username } from '../utils';

describe('Reducer: fetchUser', () => {
  describe('Default behaviour', () => {
    it('Returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchUserReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('Uses the initial state if no previous state is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchUserReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('Handles FETCH_USER_REQUEST correctly', () => {
    const action = fetchUserRequest(username);
    const newState = fetchUserReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql({});
  });
  it('Handles FETCH_USER_SUCCESS correctly', () => {
    const prevState = fetchUserReducer(undefined, fetchUserRequest(username));
    const data = [ 1, 2, 3 ];
    const action = fetchUserSuccess(data);
    const newState = fetchUserReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('Handles FETCH_USER_FAILURE correctly', () => {
    const prevState = fetchUserReducer(undefined, fetchUserRequest());
    const error = 'Something went wrong';
    const action = fetchUserFailure(error);
    const newState = fetchUserReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql({});
  });
});
