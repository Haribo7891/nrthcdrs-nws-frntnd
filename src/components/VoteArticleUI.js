import React, { Component } from 'react';
import PT from 'prop-types';

class VoteArticleUI extends Component {
  
  state = {
    votes: this.props.article.votes
  }

  handleArticleVoteUpClick = (event) => {
    event.preventDefault();
    const { votes } = this.state;
    const { handleArticleVote, article: { _id: articleId } } = this.props;
    this.setState({
      votes: votes + 1
    });
    handleArticleVote(event, articleId, 'UP');
  }
  
  handleArticleVoteDownClick = (event) => {
    event.preventDefault();
    const { votes } = this.state;
    const { handleArticleVote, article: { _id: articleId } } = this.props;
    this.setState({
      votes: votes - 1
    });
    handleArticleVote(event, articleId, 'DOWN');
  }

  render () {
    const { votes } = this.state;
    return (
      <div className="buttons-container">
        <span className="badge wiggle-me">
          <a onClick={ this.handleArticleVoteUpClick }><img src="/img/thumbs-up.png" width="20px" alt="thumbs-up"/></a>
        </span>
        <span>{ votes }</span>
        <span className="badge wiggle-me">
          <a onClick={ this.handleArticleVoteDownClick }><img src="/img/thumbs-down.png" width="20px" alt="thumbs-down"/></a>
        </span>
      </div>
    );
  }
}

VoteArticleUI.propTypes = {
  article: PT.oneOfType([ PT.object, PT.array ]).isRequired,
  handleArticleVote: PT.func.isRequired
};

export default VoteArticleUI;
