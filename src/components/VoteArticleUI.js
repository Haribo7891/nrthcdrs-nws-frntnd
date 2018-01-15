import React, { Component } from 'react';
import PT from 'prop-types';

class VoteArticleUI extends Component {
  
  state = {
    votes: this.props.article.votes
  }

  handleArticleVoteUpClick = (event) => {
    event.preventDefault()
    const { handleArticleVote, article } = this.props;
    this.setState({
      votes: this.state.votes + 1
    })
    handleArticleVote(event, article._id, 'UP')
  }
  
  handleArticleVoteDownClick = (event) => {
    event.preventDefault()
    const { handleArticleVote, article } = this.props;
    this.setState({
      votes: this.state.votes - 1
    })
    handleArticleVote(event, article._id, 'DOWN')
  }

  render () {
    const { article } = this.props;
    return (
      <div className="buttonsContainer">
        <span className="badge">
          <a onClick={ this.handleArticleVoteUpClick }><img src="/img/thumbs-up.svg" width="20px" alt="thumbs-up"/></a>
        </span>
        <span>{ this.state.votes }</span>
        <span className="badge">
          <a onClick={ this.handleArticleVoteDownClick }><img src="/img/thumbs-down.svg" width="20px" alt="thumbs-down"/></a>
        </span>
      </div>
    );
  }
}

// VoteArticleUI.propTypes = {
//   articleVotes: PT.number.isRequired,
//   handleArticleVote: PT.func.isRequired,
//   articleId: PT.string.isRequired
// };

export default VoteArticleUI;
