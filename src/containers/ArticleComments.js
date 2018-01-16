import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { putCommentVote, fetchCommentsByArticle, deleteComment, postComment } from '../actions';
import { Loading, ArticleCommentsUI, VoteCommentUI, AddCommentUI } from '../components';

class ArticleComments extends Component {

  constructor(props){
    super(props)
    this.state = {
      commentList: this.props.comments
    }
  }

  handlePutCommentVote = (event, commentId, vote) => {
    event.preventDefault();
    const { putCommentVote } = this.props;
    putCommentVote(commentId, vote);
  }

  handleDeleteComment = (event, commentId, articleId) => {
    event.preventDefault();
    const { commentList } = this.state;
    const { deleteComment, fetchCommentsByArticle } = this.props;
    const updatedComments = commentList.filter((deleted) => deleted._id !== commentId)
    this.setState({
      commentList: updatedComments
    })
    deleteComment(commentId);
    fetchCommentsByArticle(articleId);
  }

  handlePostComment = (event, articleId, comment) => {
    event.preventDefault();
    const { commentList } = this.state;
    const { postComment } = this.props;
    const newComment = [{
      body: comment,
      belongs_to: articleId,
      created_by: 'northcoder',
      votes: 0,
      created_at: Date.now()
    }];
    this.setState({
      commentList: newComment.concat(commentList)
    })
    postComment(articleId, comment);
  }
  
  render () {
    const { commentList } = this.state;
    const { articleId, loading, error } = this.props;
    return (
      <div className="article-comments">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> :
          <div className="articleCommentsUI">
            <AddCommentUI 
              articleId={ articleId }
              handlePostComment={ this.handlePostComment }
            />
            <h4>Other user comments...</h4>
            { Object.values(commentList).map((comment, i) => (
              <div key={ i } className="comment card border-success">
                <ArticleCommentsUI 
                  comment={ comment }
                  />
                <VoteCommentUI 
                  comment={ comment }
                  handleCommentVote={ this.handlePutCommentVote }
                  handleDeleteComment={ this.handleDeleteComment }
                />
              </div>
            )) }
          </div>
        }
      </div>
    );
  }
}

ArticleComments.propTypes = {
  comments: PT.oneOfType([ PT.object, PT.array ]).isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchCommentsByArticle: PT.func.isRequired,
  putCommentVote: PT.func.isRequired,
  deleteComment: PT.func.isRequired,
  postComment: PT.func.isRequired
};

const mapStateToProps = (state) => ({
    comments: state.commentsReducer.data,
    loading: state.commentsReducer.loading,
    error: state.commentsReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsByArticle: (articleId) => {
    dispatch(fetchCommentsByArticle(articleId));
  },
  putCommentVote: (commentId, vote) => {
    dispatch(putCommentVote(commentId, vote));
  },
  deleteComment: (commentId) => {
    dispatch(deleteComment(commentId));
  },
  postComment: (articleId, comment) => {
    dispatch(postComment(articleId, comment));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);
