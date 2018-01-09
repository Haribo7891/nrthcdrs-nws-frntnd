import React, { Component } from 'react';
import PT from 'prop-types';

class VoteArticleUI extends Component {
  
  handleArticleVoteUpClick = (event) => {
    event.preventDefault()
    const { handleArticleVote, articleId } = this.props;
    handleArticleVote(event, articleId, 'UP')
  }
  
  handleArticleVoteDownClick = (event) => {
    event.preventDefault()
    const { handleArticleVote, articleId } = this.props;
    handleArticleVote(event, articleId, 'DOWN')
  }

  render () {
    const { articleVotes } = this.props;
    return (
      <div className="buttonsContainer">
        <a onClick={ this.handleArticleVoteUpClick }><img src="/img/thumbs-up.svg" width="20px" alt="thumbs-up"/></a>
        <span>{ articleVotes }</span>
        <a onClick={ this.handleArticleVoteDownClick }><img src="/img/thumbs-down.svg" width="20px" alt="thumbs-down"/></a>
      </div>
    );
  }
}

VoteArticleUI.propTypes = {
  articleVotes: PT.number.isRequired,
  handleArticleVote: PT.func.isRequired,
  articleId: PT.string.isRequired
};

export default VoteArticleUI;
