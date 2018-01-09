import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { putArticleVote } from '../actions';
import { Loading, ArticleBodyUI, VoteArticleUI } from '../components';

class ArticleBody extends Component {

  state = {
    votes: this.props.article.votes
  }

  handlePutArticleVote = (event, articleId, vote) => {
    event.preventDefault()
    const { putArticleVote, article } = this.props;
    this.setState({
      votes: article.votes
    })
    putArticleVote(articleId, vote);
  }

  render () {
    const { article, loading, error } = this.props;
    return (
      <div className="article-body">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> :
          <div className="articleBodyUI">
            <ArticleBodyUI 
              article={ article }
            />
            <VoteArticleUI 
              articleVotes={ article.votes }
              articleId={ article._id }
              handleArticleVote={ this.handlePutArticleVote }
            />
          </div>
        }
      </div>
    );
  }
}

ArticleBody.propTypes = {
  article: PT.array.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  handleArticleVoteClick: PT.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  putArticleVote: (articleId, vote) => {
    dispatch(putArticleVote(articleId, vote));
  }
});

export default connect(null, mapDispatchToProps)(ArticleBody);
