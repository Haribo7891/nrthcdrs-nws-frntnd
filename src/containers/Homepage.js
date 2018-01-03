import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchArticles } from '../actions';
import { Loading } from '../components';

class Homepage extends Component {
  
  componentDidMount () {
    this.props.fetchArticles();
  }

  render () {
    const { articles, loading, error } = this.props;
    return (
      <div className="homepage container">
        <h4>Check out the articles, then vote and comment on your favourite!</h4>
        {error && <Redirect to="/404" />}
        {loading ? <Loading /> : (
          <div className="homepage-list">
            Hello Homepage
          </div>
        )}
      </div>
    );
  }
}

Homepage.propTypes = {
  articles: PT.object.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticles: PT.func.isRequired
};

const mapStateToProps = (state) => ({
  articles: state.articlesReducer.data,
  loading: state.articlesReducer.loading,
  error: state.articlesReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => {
    dispatch(fetchArticles());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
