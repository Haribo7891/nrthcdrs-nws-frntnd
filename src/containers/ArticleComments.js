import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { putCommentVote, fetchCommentsByArticle } from '../actions';
import { Loading, ArticleCommentsUI, VoteCommentUI } from '../components';

class ArticleComments extends Component {

  state = {
    comments: this.props.comments
  }

  handlePutCommentVote = (event, commentId, vote) => {
    event.preventDefault()
    this.props.putCommentVote(commentId, vote);
  }

  render () {
    const { comments } = this.state;
    const { loading, error, handleDeleteComment } = this.props;
    return (
      <div className="article-comments">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> :
          <div className="articleCommentsUI">
            { Object.values(comments).map((comment) => (
              <div key={ comment._id } className="comment card border-success">
                <ArticleCommentsUI 
                  comment={ comment }
                />
                <VoteCommentUI 
                  comment={ comment }
                  handleCommentVote={ this.handlePutCommentVote }
                  handleDeleteComment={ handleDeleteComment }
                />
              </div>
            )) }
          </div>
        }
      </div>
    );
  }
}

// ArticleComments.propTypes = {
//   comments: PT.oneOfType([ PT.object, PT.array ]).isRequired,
//   loading: PT.bool.isRequired,
//   error: PT.any,
//   handlePutCommentVote: PT.func.isRequired,
//   handleDeleteComment: PT.func.isRequired
// };

const mapStateToProps = (state) => ({
    comments: state.commentsReducer.data,
    loading: state.commentsReducer.loading,
    error: state.commentsReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  putCommentVote: (commentId, vote) => {
    dispatch(putCommentVote(commentId, vote));
  },
  fetchCommentsByArticle: (articleId) => {
    dispatch(fetchCommentsByArticle(articleId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);
