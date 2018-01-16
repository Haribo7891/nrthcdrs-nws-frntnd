import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchArticleById, fetchCommentsByArticle } from '../actions';
import { Loading } from '../components';
import { ArticleBody, ArticleComments } from '../containers';

class ArticlePage extends Component {
  
  componentDidMount () {
    const { fetchArticleById, fetchCommentsByArticle, match: { params: { articleId } } } = this.props;
    fetchArticleById(articleId);
    fetchCommentsByArticle(articleId);
  }

  render () {
    const { article, loading, error } = this.props;
    return (
      <div className="container">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> : 
          <div className="card border-secondary">
            <div className="article-page-color">
              <ArticleBody />
            </div>        
            <div className="articleCard-text article-page-color">
              <h4>Other user comments:</h4>
              <ArticleComments 
                articleId={ article._id }
              />
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
