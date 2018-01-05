import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchArticleById, fetchCommentsByArticle, putArticleVote, putCommentVote, deleteComment, postComment } from '../actions';
import { Loading } from '../components';
import { ArticleBody, ArticleComments, AddComment } from '../containers';

class ArticlePage extends Component {
  
  constructor (props) {
    super(props);
    this.handleArticleVoteClick = this.handleArticleVoteClick.bind(this);
    this.handleCommentVoteClick = this.handleCommentVoteClick.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  componentDidMount () {
    const { fetchArticleById, fetchCommentsByArticle, match: { params: { articleId } } } = this.props;
    fetchArticleById(articleId);
    fetchCommentsByArticle(articleId);
  }

  handleArticleVoteClick (articleId, vote) {
    const { putArticleVote } = this.props;
    return () => putArticleVote(articleId, vote);
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
                handleArticleVoteClick={ this.handleArticleVoteClick }
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
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticleById: PT.func.isRequired,
  fetchCommentsByArticle: PT.func.isRequired,
  putArticleVote: PT.func.isRequired,
  putCommentVote: PT.func.isRequired,
  deleteComment: PT.func.isRequired,
  postComment: PT.func.isRequired
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
  },
  putArticleVote: (articleId, vote) => {
    dispatch(putArticleVote(articleId, vote));
  },
  putCommentVote: (commentId, vote) => {
    dispatch(putCommentVote(commentId, vote));
  },
  deleteComment: (commentId) => {
    dispatch(deleteComment(commentId));
  },
  postComment: () => {
    dispatch(postComment());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
