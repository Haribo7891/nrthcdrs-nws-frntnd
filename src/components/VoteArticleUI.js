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
      <div className="container">
        <div className="row">
          <div className="col badge wiggle-me">
            <a onClick={ this.handleArticleVoteUpClick }><img src="/img/thumbs-up.png" width="40px" alt="thumbs-up"/></a>
          </div>
          <div className="col votes vote-size">{ votes } <img src="/img/smile-o.png" width="30px" alt="smile-o"/></div>
          <div className="col badge wiggle-me">
            <a onClick={ this.handleArticleVoteDownClick }><img src="/img/thumbs-down.png" width="40px" alt="thumbs-down"/></a>
          </div>
        </div>
      </div>
    );
  }
}

VoteArticleUI.propTypes = {
  article: PT.object.isRequired,
  handleArticleVote: PT.func.isRequired
};

export default VoteArticleUI;
