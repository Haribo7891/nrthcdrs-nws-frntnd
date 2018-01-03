import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import putArticleVote, {
  putArticleVoteRequest,
  putArticleVoteSuccess,
  putArticleVoteFailure
} from '../../src/actions/putArticleVote';

import {
  articleId,
  voteUp,
  voteDown,
  incorrectArticleId
} from '../utils';

import { API_URL } from '../../src/config/index';

const mockStore = configureMockStore([thunk]);

describe('Action Creator: putArticleVote', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Dispatches PUT_ARTICLE_VOTE_SUCCESS when voting an article UP responds with 200 and data', () => {
    const data = {
      _id: articleId,
      votes: 1
    };
    nock(API_URL)
      .put(`/articles/${ articleId }?vote=${ voteUp }`)
      .reply(200, { article: data });
      
    const expectedActions = [
      putArticleVoteRequest(articleId, voteUp),
      putArticleVoteSuccess(data)
    ];

    const store = mockStore();

    return store.dispatch(putArticleVote(articleId, voteUp))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches PUT_ARTICLE_VOTE_SUCCESS when voting an article DOWN responds with 200 and data', () => {
    const data = {
      _id: articleId,
      votes: 0
    };
    nock(API_URL)
      .put(`/articles/${ articleId }?vote=${ voteDown }`)
      .reply(200, { article: data });
      
    const expectedActions = [
      putArticleVoteRequest(articleId, voteDown),
      putArticleVoteSuccess(data)
    ];

    const store = mockStore();

    return store.dispatch(putArticleVote(articleId, voteDown))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches PUT_ARTICLE_VOTE_FAILURE when voting an article responds with an error', () => {
    nock(API_URL)
      .put(`/articles/${ incorrectArticleId }?vote=${ voteUp }`)
      .replyWithError({ 'message': 'error' });
      
    const expectedActions = [
      putArticleVoteRequest(incorrectArticleId, voteUp),
      putArticleVoteFailure('error')
    ];

    const store = mockStore();

    return store.dispatch(putArticleVote(incorrectArticleId, voteUp))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
