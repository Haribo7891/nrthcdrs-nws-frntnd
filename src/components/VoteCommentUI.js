import React from 'react';
import PT from 'prop-types';

const VoteCommentUI = ({ commentVotes, commentId, handleCommentVoteClick, deleteNorthcoder, handleDeleteComment }) => (
  <div className="buttonsContainer comment-vote-color">
    <span>Vote: </span>
    <img src="/img/thumbs-up.svg" width="20px" alt="thumbs-up" onClick={ handleCommentVoteClick(commentId, 'UP') } />
    <span>{ commentVotes }</span>
    <img src="/img/thumbs-down.svg" width="20px" alt="thumbs-down" onClick={ handleCommentVoteClick(commentId, 'DOWN') } />
    { deleteNorthcoder && <img src="/img/cup.svg" width="20px" alt="delete" onClick={ handleDeleteComment(commentId) } /> }
  </div>
);

VoteCommentUI.propTypes = {
  commentVotes: PT.number.isRequired,
  handleCommentVoteClick: PT.func.isRequired,
  handleDeleteComment: PT.func.isRequired,
  commentId: PT.string.isRequired,
};
export default VoteCommentUI;
