import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { putCommentVote, fetchCommentsByArticle, deleteComment } from '../actions';
import { Loading, ArticleCommentsUI, VoteCommentUI } from '../components';

class ArticleComments extends Component {

  constructor(props){
    super(props)
    this.state = {
      commentList: this.props.comments
    }
  }

  handlePutCommentVote = (event, commentId, vote) => {
    event.preventDefault()
    const { putCommentVote } = this.props;
    putCommentVote(commentId, vote);
  }

  handleDeleteComment = (event, commentId, articleId) => {
    event.preventDefault()
    const { commentList } = this.state;
    const { deleteComment, fetchCommentsByArticle } = this.props;
    const newComments = commentList.filter((deleted) => deleted._id !== commentId)
    this.setState({
      commentList: newComments
    })
    deleteComment(commentId);
    fetchCommentsByArticle(articleId);
  }
  
  render () {
    const { commentList } = this.state;
    const { comments, loading, error } = this.props;
    return (
      <div className="article-comments">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> :
          <div className="articleCommentsUI">
            { Object.values(commentList).map((comment) => (
              <div key={ comment._id } className="comment card border-success">
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
  handlePutCommentVote: PT.func,
  handleDeleteComment: PT.func,
  fetchCommentsByArticle: PT.func
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);
