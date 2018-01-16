import React, { Component } from 'react';
import PT from 'prop-types';

class VoteCommentUI extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      votes: this.props.comment.votes,
    };
  };

  handleCommentVoteUpClick = (event) => {
    event.preventDefault();
    const { handleCommentVote, comment: { _id: commentId } } = this.props;
    this.setState({
      votes: this.state.votes + 1
    });
    handleCommentVote(event, commentId, 'UP');
  };
  
  handleCommentVoteDownClick = (event) => {
    event.preventDefault();
    const { handleCommentVote, comment: { _id: commentId } } = this.props;
    this.setState({
      votes: this.state.votes - 1
    });
    handleCommentVote(event, commentId, 'DOWN');
  };

  handleDeleteCommentClick = (event) => {
    event.preventDefault();
    const { handleDeleteComment, comment: { _id, belongs_to } } = this.props;
    handleDeleteComment(event, _id, belongs_to);
  };

  render () {
    const { comment: { created_by } } = this.props;
    const { votes } = this.state;
    return (
      <div className="buttonsContainer comment-color">
        <span className="badge">
          <a onClick={ this.handleCommentVoteUpClick }><img src="/img/thumbs-up.svg" width="20px" alt="thumbs-up"/></a>
        </span>
        <span>{ votes }</span>
        <span className="badge">
          <a onClick={ this.handleCommentVoteDownClick }><img src="/img/thumbs-down.svg" width="20px" alt="thumbs-down"/></a>
        </span>
        { (created_by === 'northcoder') && <a onClick={ this.handleDeleteCommentClick }><img src="/img/cup.svg" width="20px" alt="delete"/></a> }        
      </div>
    );
  };
};

VoteCommentUI.propTypes = {
  comment: PT.oneOfType([ PT.object, PT.array ]).isRequired,
  handleCommentVote: PT.func.isRequired,
  handleDeleteComment: PT.func.isRequired
};

export default VoteCommentUI;
