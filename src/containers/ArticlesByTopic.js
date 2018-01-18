import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchArticlesByTopic } from '../actions';
import { Loading, ArticlesByTopicUI } from '../components';

class ArticlesByTopic extends Component {
  
  componentDidMount () {
    const { fetchArticlesByTopic, match: { params: { topic } } } = this.props;
    fetchArticlesByTopic(topic);
  }

  componentWillReceiveProps (nextProps) {
    const { fetchArticlesByTopic, match: { params: { topic: oldTopic } } } = this.props;
    const { match: { params: { topic: newTopic } } } = nextProps;
    if (newTopic !== oldTopic) {
      fetchArticlesByTopic(newTopic);
    }
  }

  render () {
    const { articles, loading, error } = this.props;
    return (
      <div className="article-list">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> : (
          <div className="article-list-title">
            <div className="article-list-list">
              <div className="list-item">
                { Object.values(articles)
                  .map((article, i) => (
                    <div key={ i } className="card-group">
                      <ArticlesByTopicUI 
                        article={ article }
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

ArticlesByTopic.propTypes = {
  articles: PT.oneOfType([ PT.object, PT.array ]).isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticlesByTopic: PT.func.isRequired
};

const mapStateToProps = (state) => ({
  articles: state.articlesReducer.data,
  loading: state.articlesReducer.loading,
  error: state.articlesReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticlesByTopic: (topic) => {
    dispatch(fetchArticlesByTopic(topic));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesByTopic);
