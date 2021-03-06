import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchArticleById, fetchCommentsByArticle, putArticleVote, putCommentVote, postComment, deleteComment } from '../actions';
import { Loading, ArticleBodyUI, VoteArticleUI, VoteCommentUI, ArticleCommentsUI, AddCommentUI, Footer } from '../components';

class ArticlePage extends Component {
  
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

  handlePutCommentVote = (event, commentId, vote) => {
    event.preventDefault();
    const { putCommentVote } = this.props;
    putCommentVote(commentId, vote);
  }

  handleDeleteComment = (event, commentId) => {
    event.preventDefault();
    const { deleteComment } = this.props;
    deleteComment(commentId);
  }

  render () {
    const { article, comments, loading, error } = this.props;
    return (
      <div className="article-page">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> : 
          <div className="container">
            <div className="card card-margin border-secondary">
              <div className="article-page-color">
                <ArticleBodyUI 
                  article={ article }
                />
                <div className="article">
                  <VoteArticleUI 
                    article={ article }
                    handleArticleVote={ this.handlePutArticleVote }
                  />
                </div>
              </div>        
              <div className="article-card-text article-page-color">
                <div className="article add-comment">
                  <AddCommentUI 
                    articleId={ article._id }
                    handlePostComment={ this.handlePostComment }
                  />
                </div>
                <div className="other-comments">
                  <h4>Other user comments...</h4>
                </div>
                { comments.map((comment, i) => (
                  <div key={ i } className="article">
                    <div className="card card-margin border-success comment-color">
                      <div className="card-body">
                        <ArticleCommentsUI 
                          comment={ comment }
                        />
                        <VoteCommentUI 
                          comment={ comment }
                          handleCommentVote={ this.handlePutCommentVote }
                          handleDeleteComment={ this.handleDeleteComment }
                        />
                      </div>
                    </div>
                  </div>
                )) }
              </div>
            </div>
            <Footer /> 
          </div>
        }
      </div>
    );
  }
}

ArticlePage.propTypes = {
  article: PT.object.isRequired,
  comments: PT.oneOfType([ PT.object, PT.array ]).isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticleById: PT.func.isRequired,
  fetchCommentsByArticle: PT.func.isRequired,
  putArticleVote: PT.func.isRequired,
  putCommentVote: PT.func.isRequired,
  postComment: PT.func.isRequired,
  deleteComment: PT.func.isRequired
};

const mapStateToProps = (state) => {
  const {
    data: article,
    loading: articleLoading,
    error: articleError
  } = state.singleArticleReducer;

  const {
    data: comments,
    loading: commentsLoading,
    error: commentsError
  } = state.commentsReducer;

  return {
    article,
    comments,
    loading: commentsLoading || articleLoading,
    error: commentsError || articleError
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
  },
  putCommentVote: (commentId, vote) => {
    dispatch(putCommentVote(commentId, vote));
  },
  deleteComment: (commentId) => {
    dispatch(deleteComment(commentId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
