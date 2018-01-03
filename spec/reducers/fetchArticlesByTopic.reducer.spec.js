import { expect } from 'chai';
import fetchArticlesByTopic, { initialState } from '../../src/reducers/articlesReducer';
import {
  fetchArticlesByTopicRequest,
  fetchArticlesByTopicSuccess,
  fetchArticlesByTopicFailure
} from '../../src/actions/fetchArticlesByTopic';

import { topic } from '../utils';

describe('Reducer: fetchArticlesByTopic', () => {
  describe('Default behaviour', () => {
    it('Returns the passed previous state if an unrecognised action is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchArticlesByTopic(initialState, action);
      expect(newState).to.equal(initialState);
    });
    it('Uses the initial state if no previous state is passed', () => {
      const action = { type: 'some action' };
      const newState = fetchArticlesByTopic(undefined, action);
      expect(newState).to.equal(initialState);
    });
  });
  it('Handles FETCH_ARTICLES_BY_TOPIC_REQUEST correctly', () => {
    const action = fetchArticlesByTopicRequest(topic);
    const newState = fetchArticlesByTopic(undefined, action);
    expect(newState.loading).to.be.true;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql({});
  });
  it('Handles FETCH_ARTICLES_BY_TOPIC_SUCCESS correctly', () => {
    const prevState = fetchArticlesByTopic(undefined, fetchArticlesByTopicRequest(topic));
    const data = [ 1, 2, 3 ];
    const action = fetchArticlesByTopicSuccess(data);
    const newState = fetchArticlesByTopic(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.be.null;
    expect(newState.data).to.eql(data);
  });
  it('Handles FETCH_ARTICLES_BY_TOPIC_FAILURE correctly', () => {
    const prevState = fetchArticlesByTopic(undefined, fetchArticlesByTopicRequest());
    const error = 'Something went wrong';
    const action = fetchArticlesByTopicFailure(error);
    const newState = fetchArticlesByTopic(prevState, action);
    expect(newState.loading).to.be.false;
    expect(newState.error).to.eql(error);
    expect(newState.data).to.eql({});
  });
});
