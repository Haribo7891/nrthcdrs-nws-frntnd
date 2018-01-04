import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchArticleById, fetchCommentsByArticle } from '../actions';
import { Loading } from '../components';
import { ArticleBody, ArticleComments, AddComment } from '../containers';

class ArticlePage extends Component {
  
  componentDidMount () {
    const { fetchArticleById, fetchCommentsByArticle, match: { params: { articleId } } } = this.props;
    fetchArticleById(articleId);
    fetchCommentsByArticle(articleId);
  }

  render () {
    const { article, comments, loading, error } = this.props;
    return (
      <div className="container">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> : (
          <div className="card border-secondary">
            <div className="article-page-color">
              <ArticleBody 
                article={ article }
              />
              <AddComment />
            </div>        
            <div className="articleCard-text article-page-color">
              <h4>Other user comments:</h4>
              <ArticleComments 
                comments={ comments }
              />
            </div>
          </div>
        ) }
      </div>
    );
  }
}

ArticlePage.propTypes = {
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticleById: PT.func.isRequired,
  fetchCommentsByArticle: PT.func.isRequired
};

const mapStateToProps = (state) => ({
  comments: state.commentsReducer.data,
  article: state.articlesReducer.data,
  loading: state.articlesReducer.loading,
  error: state.articlesReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticleById: (articleId) => {
    dispatch(fetchArticleById(articleId));
  },
  fetchCommentsByArticle: (articleId) => {
    dispatch(fetchCommentsByArticle(articleId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
