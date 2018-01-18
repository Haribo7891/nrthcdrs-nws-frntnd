import React, { Component } from 'react';
import PT from 'prop-types';

class VoteCommentUI extends Component {
  
  state = {
    votes: this.props.comment.votes,
  };

  handleCommentVoteUpClick = (event) => {
    event.preventDefault();
    const { votes } = this.state;
    const { handleCommentVote, comment: { _id: commentId } } = this.props;
    this.setState({
      votes: votes + 1
    });
    handleCommentVote(event, commentId, 'UP');
  };
  
  handleCommentVoteDownClick = (event) => {
    event.preventDefault();
    const { votes } = this.state;
    const { handleCommentVote, comment: { _id: commentId } } = this.props;
    this.setState({
      votes: votes - 1
    });
    handleCommentVote(event, commentId, 'DOWN');
  };

  handleDeleteCommentClick = (event) => {
    event.preventDefault();
    const { handleDeleteComment, comment: { _id: commentId, belongs_to: articleId } } = this.props;
    handleDeleteComment(event, commentId, articleId);
  };

  render () {
    const { comment: { created_by: username } } = this.props;
    const { votes } = this.state;
    return (
      <div className="buttons-container comment-vote-color">
        <span className="badge">
          <a onClick={ this.handleCommentVoteUpClick }><img src="/img/thumbs-up.png" width="20px" alt="thumbs-up"/></a>
        </span>
        <span>{ votes }</span>
        <span className="badge">
          <a onClick={ this.handleCommentVoteDownClick }><img src="/img/thumbs-down.png" width="20px" alt="thumbs-down"/></a>
        </span>
        { (username === 'northcoder') && <a onClick={ this.handleDeleteCommentClick }><img src="/img/trash.png" width="20px" alt="delete"/></a> }        
      </div>
    );
  }
}

VoteCommentUI.propTypes = {
  comment: PT.oneOfType([ PT.object, PT.array ]).isRequired,
  handleCommentVote: PT.func.isRequired,
  handleDeleteComment: PT.func.isRequired
};

export default VoteCommentUI;
