import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchArticleById } from '../actions';
import { Loading } from '../components';
import { ArticleBody, ArticleComments, AddComment } from '../containers';

class ArticlePage extends Component {
  
  componentDidMount () {
    const { fetchArticleById, match: { params: { articleId } } } = this.props;
    fetchArticleById(articleId);
  }

  render () {
    const { article, loading, error } = this.props;
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
              <ArticleComments />
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
  fetchArticleById: PT.func.isRequired
};

const mapStateToProps = (state) => ({
  article: state.articlesReducer.data,
  loading: state.articlesReducer.loading,
  error: state.articlesReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticleById: (articleId) => {
    dispatch(fetchArticleById(articleId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
