import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT, { object } from 'prop-types';

import { fetchArticlesByTopic } from '../actions';
import { Loading, ArticlesByTopicUI, Footer } from '../components';

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
      <div className="articles-by-topic">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> : (
          <div className="container">
            <div className="row">
              { articles.map((article, i) => (
                <div key={ i } className="col-md-6 card-group">
                  <ArticlesByTopicUI 
                    article={ article }
                  />
                </div>
              ))}
            </div>
            <Footer /> 
          </div>
        )}
      </div>
    );
  }
}

ArticlesByTopic.propTypes = {
  articles: PT.arrayOf(object).isRequired,
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
