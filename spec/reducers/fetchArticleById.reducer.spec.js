import { expect } from 'chai';
import fetchArticleByIdReducer, { initialState } from '../../src/reducers/articlesReducer';
import {
  fetchArticleByIdRequest,
  fetchArticleByIdSuccess,
  fetchArticleByIdFailure
} from '../../src/actions/fetchArticleById';

describe('Reducer: fetchArticleById', () => {
  describe('Default behaviour', () => {
    it('Returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchArticleByIdReducer(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('Uses the initial state if no previous state is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchArticleByIdReducer(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('Handles FETCH_ARTICLE_BY_ID_REQUEST correctly', () => {
    const action = fetchArticleByIdRequest();
    const newState = fetchArticleByIdReducer(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql({});
  });
  it('Handles FETCH_ARTICLE_BY_ID_SUCCESS correctly', () => {
    const prevState = fetchArticleByIdReducer(undefined, fetchArticleByIdRequest());
    const data = [ 1, 2, 3 ];
    const action = fetchArticleByIdSuccess(data);
    const newState = fetchArticleByIdReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('Handles FETCH_ARTICLE_BY_ID_FAILURE correctly', () => {
    const prevState = fetchArticleByIdReducer(undefined, fetchArticleByIdRequest());
    const error = 'Something went wrong';
    const action = fetchArticleByIdFailure(error);
    const newState = fetchArticleByIdReducer(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql({});
  });
});
