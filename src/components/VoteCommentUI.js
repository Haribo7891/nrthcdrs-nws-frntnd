import React, { Component } from 'react';
import PT from 'prop-types';

class VoteCommentUI extends Component {
  
    state = {
      votes: this.props.comment.votes,
    }

  handleCommentVoteUpClick = (event) => {
    event.preventDefault()
    const { handleCommentVote, comment } = this.props;
    this.setState({
      votes: this.state.votes + 1
    })
    handleCommentVote(event, comment._id, 'UP')
  }
  
  handleCommentVoteDownClick = (event) => {
    event.preventDefault()
    const { handleCommentVote, comment } = this.props;
    this.setState({
      votes: this.state.votes - 1
    })
    handleCommentVote(event, comment._id, 'DOWN')
  }

  render () {
    const { handleDeleteComment, comment } = this.props;
    return (
      <div className="buttonsContainer comment-color">
        <span className="badge">
          <a onClick={ this.handleCommentVoteUpClick }><img src="/img/thumbs-up.svg" width="20px" alt="thumbs-up"/></a>
        </span>
        <span>{ this.state.votes }</span>
        <span className="badge">
          <a onClick={ this.handleCommentVoteDownClick }><img src="/img/thumbs-down.svg" width="20px" alt="thumbs-down"/></a>
        </span>
        { (comment.created_by === 'northcoder') && <a onClick={ handleDeleteComment(comment._id) }><img src="/img/cup.svg" width="20px" alt="delete"/></a> }        
      </div>
    );
  }
}

VoteCommentUI.propTypes = {
  handleCommentVote: PT.func.isRequired,
  // handleDeleteComment: PT.func.isRequired,
  // deleteNorthcoder: PT.bool.isRequired
};

export default VoteCommentUI;
