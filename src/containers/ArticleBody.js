import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { putArticleVote } from '../actions';
import { Loading, ArticleBodyUI, VoteArticleUI } from '../components';

class ArticleBody extends Component {

  state = {
    article: this.props.article
  }

  handlePutArticleVote = (event, articleId, vote) => {
    event.preventDefault();
    const { putArticleVote } = this.props;
    putArticleVote(articleId, vote);
  }

  render () {
    const { article } = this.state;
    const { loading, error } = this.props;
    return (
      <div className="article-body">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> :
          <div className="articleBodyUI">
            <ArticleBodyUI 
              article={ article }
            />
            <VoteArticleUI 
              article={ article }
              handleArticleVote={ this.handlePutArticleVote }
            />
          </div>
        }
      </div>
    );
  }
}

ArticleBody.propTypes = {
  article: PT.oneOfType([ PT.object, PT.array ]).isRequired,
  loading: PT.bool.isRequired,
  error: PT.any
};

const mapStateToProps = (state) => ({
  article: state.articlesReducer.data,
  loading: state.articlesReducer.loading,
  error: state.articlesReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  putArticleVote: (articleId, vote) => {
    dispatch(putArticleVote(articleId, vote));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleBody);
