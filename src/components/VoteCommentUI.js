import React, { Component } from 'react';
import PT from 'prop-types';

class VoteCommentUI extends Component {
  
  state = {
    votes: this.props.comment.votes
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
    const { handleDeleteComment, comment: { _id: commentId } } = this.props;
    handleDeleteComment(event, commentId);
  };

  render () {
    const { comment: { created_by: username } } = this.props;
    const { votes } = this.state;
    return (
      <div>
        <div className="buttons-container comment-vote-color">
          <span className="badge wiggle-me">
            <a onClick={ this.handleCommentVoteUpClick }><img src="/img/thumbs-up.png" width="25px" alt="thumbs-up"/></a>
          </span>
          <span>{ votes } <img src="/img/smile-o.png" width="25px" alt="smile-o"/></span>
          <span className="badge wiggle-me">
            <a onClick={ this.handleCommentVoteDownClick }><img src="/img/thumbs-down.png" width="25px" alt="thumbs-down"/></a>
          </span>
        </div>
        <div className="badge wiggle-me">
          { (username === 'northcoder') && <a onClick={ this.handleDeleteCommentClick }><img src="/img/trash.png" width="25px" alt="delete"/></a> }        
        </div>
      </div>
    );
  }
}

VoteCommentUI.propTypes = {
  comment: PT.object.isRequired,
  handleCommentVote: PT.func.isRequired,
  handleDeleteComment: PT.func.isRequired
};

export default VoteCommentUI;
