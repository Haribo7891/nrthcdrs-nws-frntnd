import { expect } from 'chai';
import fetchArticlesReducer, { initialState } from '../../src/reducers/articlesReducer';
import {
  fetchArticlesRequest,
  fetchArticlesSuccess,
  fetchArticlesFailure
} from '../../src/actions/fetchArticles';

describe('Reducer: fetchArticles', () => {
  describe('Default behaviour', () => {
    it('Returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchArticlesReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('Uses the initial state if no previous state is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchArticlesReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('Handles FETCH_ARTICLES_REQUEST correctly', () => {
    const action = fetchArticlesRequest();
    const newState = fetchArticlesReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql([]);
  });
  it('Handles FETCH_ARTICLES_SUCCESS correctly', () => {
    const prevState = fetchArticlesReducer(undefined, fetchArticlesRequest());
    const data = [ 1, 2, 3 ];
    const action = fetchArticlesSuccess(data);
    const newState = fetchArticlesReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('Handles FETCH_ARTICLES_FAILURE correctly', () => {
    const prevState = fetchArticlesReducer(undefined, fetchArticlesRequest());
    const error = 'Something went wrong';
    const action = fetchArticlesFailure(error);
    const newState = fetchArticlesReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql([]);
  });
});
