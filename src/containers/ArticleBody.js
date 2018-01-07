import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { Loading, ArticleBodyUI, VoteArticleUI } from '../components';

class ArticleBody extends Component {

  render () {
    const { article, loading, error, handleArticleVoteClick } = this.props;
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
              handleArticleVoteClick={ handleArticleVoteClick }
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

export default connect(null, null)(ArticleBody);
