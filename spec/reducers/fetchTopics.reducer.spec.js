import { expect } from 'chai';
import fetchTopicsReducer, { initialState } from '../../src/reducers/topicsReducer';
import {
  fetchTopicsRequest,
  fetchTopicsSuccess,
  fetchTopicsFailure
} from '../../src/actions/fetchTopics';

describe('Reducer: fetchTopics', () => {
  describe('Default behaviour', () => {
    it('Returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchTopicsReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('Uses the initial state if no previous state is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchTopicsReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('Handles FETCH_TOPICS_REQUEST correctly', () => {
    const action = fetchTopicsRequest();
    const newState = fetchTopicsReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('Handles FETCH_TOPICS_SUCCESS correctly', () => {
    const prevState = fetchTopicsReducer(undefined, fetchTopicsRequest());
    const data = [ 1, 2, 3 ];
    const action = fetchTopicsSuccess(data);
    const newState = fetchTopicsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('Handles FETCH_TOPICS_FAILURE correctly', () => {
    const prevState = fetchTopicsReducer(undefined, fetchTopicsRequest());
    const error = 'Something went wrong';
    const action = fetchTopicsFailure(error);
    const newState = fetchTopicsReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});
