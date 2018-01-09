import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchArticleById, fetchCommentsByArticle, putCommentVote, deleteComment } from '../actions';
import { Loading } from '../components';
import { ArticleBody, ArticleComments, AddComment } from '../containers';

class ArticlePage extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      votes: this.props.article.votes
    }
    this.handleCommentVoteClick = this.handleCommentVoteClick.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  componentDidMount () {
    const { fetchArticleById, fetchCommentsByArticle, match: { params: { articleId } } } = this.props;
    fetchArticleById(articleId);
    fetchCommentsByArticle(articleId);
  }

  handleCommentVoteClick (commentId, vote) {
    const { putCommentVote } = this.props;
    return () => putCommentVote(commentId, vote);
  }

  handleDeleteComment (commentId) {
    const { deleteComment } = this.props;
    return () => deleteComment(commentId);
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
              <AddComment 
                articleId={ article._id }
              />
            </div>        
            <div className="articleCard-text article-page-color">
              <h4>Other user comments:</h4>
              <ArticleComments 
                comments={ comments }
                handleCommentVoteClick={ this.handleCommentVoteClick }
                handleDeleteComment={ this.handleDeleteComment }
              />
            </div>
          </div>
        ) }
      </div>
    );
  }
}

ArticlePage.propTypes = {
  article: PT.array.isRequired,
  comments: PT.array.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticleById: PT.func.isRequired,
  fetchCommentsByArticle: PT.func.isRequired,
  putCommentVote: PT.func.isRequired,
  deleteComment: PT.func.isRequired
};

const mapStateToProps = (state) => {
  const {
    data: article,
    loading: articlesLoading,
    error: articlesError
  } = state.articlesReducer;

  const {
    data: comments,
    loading: commentsLoading,
    error: commentsError
  } = state.commentsReducer;

  return {
    article,
    comments,
    loading: articlesLoading || commentsLoading,
    error: articlesError || commentsError
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArticleById: (articleId) => {
    dispatch(fetchArticleById(articleId));
  },
  fetchCommentsByArticle: (articleId) => {
    dispatch(fetchCommentsByArticle(articleId));
  },
  putCommentVote: (commentId, vote) => {
    dispatch(putCommentVote(commentId, vote));
  },
  deleteComment: (commentId) => {
    dispatch(deleteComment(commentId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
