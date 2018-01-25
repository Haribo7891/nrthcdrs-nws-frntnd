import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchArticleById, fetchCommentsByArticle, putArticleVote, putCommentVote, postComment, deleteComment } from '../actions';
import { Loading, ArticleBodyUI, VoteArticleUI, VoteCommentUI, ArticleCommentsUI, AddCommentUI } from '../components';

class ArticlePage extends Component {
  
  state = {

  }

  componentDidMount () {
    const { fetchArticleById, fetchCommentsByArticle, match: { params: { articleId } } } = this.props;
    fetchArticleById(articleId);
    fetchCommentsByArticle(articleId);
  }

  handlePutArticleVote = (event, articleId, vote) => {
    event.preventDefault();
    const { putArticleVote } = this.props;
    putArticleVote(articleId, vote);
  }

  handlePostComment = (event, articleId, comment) => {
    event.preventDefault();
    const { postComment } = this.props;
    postComment(articleId, comment);
  }

  render () {
    const { article, comments, loading, error } = this.props;
    return (
      <div className="container-fluid">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> : 
          <div className="card border-secondary">
            <div className="article-page-color">
              <ArticleBodyUI 
                article={ article }
              />
              <VoteArticleUI 
                article={ article }
                handleArticleVote={ this.handlePutArticleVote }
              />
            </div>        
            <div className="articleCard-text article-page-color">
              {/* <ArticleComments 
                articleId={ articleId }
              /> */}
              <AddCommentUI 
                articleId={ article._id }
                handlePostComment={ this.handlePostComment }
              />
              <h4>Other user comments...</h4>
              { Object.values(comments).map((comment, i) => (
                <div key={ i } className="card border-success">
                  <ArticleCommentsUI 
                    comment={ comment }
                  />
                </div>
              ))}
              {/* <VoteCommentUI /> */}
            </div>
          </div>
        }
      </div>
    );
  }
}

ArticlePage.propTypes = {
  article: PT.oneOfType([ PT.object, PT.array ]).isRequired,
  comments: PT.oneOfType([ PT.object, PT.array ]).isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticleById: PT.func.isRequired,
  fetchCommentsByArticle: PT.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    data: article,
    loading: articleLoading,
    error: articleError
  } = state.articlesReducer;

  const {
    data: comments,
    loading: commentsLoading,
    error: commentsError
  } = state.commentsReducer;

  return {
    article,
    comments,
    loading: articleLoading || commentsLoading,
    error: articleError || commentsError
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArticleById: (articleId) => {
    dispatch(fetchArticleById(articleId));
  },
  fetchCommentsByArticle: (articleId) => {
    dispatch(fetchCommentsByArticle(articleId));
  },
  putArticleVote: (articleId, vote) => {
    dispatch(putArticleVote(articleId, vote));
  },
  postComment: (articleId, comment) => {
    dispatch(postComment(articleId, comment));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
