import React from 'react';
import PT from 'prop-types';

const VoteArticleUI = ({ articleVotes, articleId, handleArticleVoteClick }) => (
  <div className="buttonsContainer">
    <span>Vote: </span>
    <img src="/img/thumbs-up.svg" width="20px" alt="thumbs-up" onClick={ handleArticleVoteClick(articleId, 'UP') } />
    <span>{ articleVotes }</span>
    <img src="/img/thumbs-down.svg" width="20px" alt="thumbs-down" onClick={ handleArticleVoteClick(articleId, 'DOWN') } />
  </div>
);

VoteArticleUI.propTypes = {
  articleVotes: PT.number.isRequired,
  handleArticleVoteClick: PT.func.isRequired,
  articleId: PT.string.isRequired,
};

export default VoteArticleUI;
