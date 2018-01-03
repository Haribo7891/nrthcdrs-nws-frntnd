import { expect } from 'chai';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import postComment, {
  postCommentRequest,
  postCommentSuccess,
  postCommentFailure
} from '../../src/actions/postComment';

import {
  articleId,
  comment
} from '../utils';

import { API_URL } from '../../src/config/index';

const mockStore = configureMockStore([thunk]);

describe('Action Creator: postComment', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('Dispatches POST_COMMENT_SUCCESS when posting a comment responds with 201 and data', () => {
    nock(API_URL)
      .post(`/articles/${ articleId }/comments`, { comment })
      .reply(201, { comment: { body: comment, created_by: 'northcoder' } });
      
    const expectedActions = [
      postCommentRequest(articleId, comment),
      postCommentSuccess([{ body: comment, created_by: 'northcoder' }])
    ];

    const store = mockStore();

    return store.dispatch(postComment(articleId, comment))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
  it('Dispatches POST_COMMENT_FAILURE when posting a comment responds with an error', () => {
    nock(API_URL)
      .post(`/articles/${ articleId }/comments`, { comment })
      .replyWithError({ 'message': 'error' });
      
    const expectedActions = [
      postCommentRequest(articleId, comment),
      postCommentFailure('error')
    ];

    const store = mockStore();

    return store.dispatch(postComment(articleId, comment))
      .then(() => {
        expect(store.getActions()).to.eql(expectedActions);
      });
  });
});
