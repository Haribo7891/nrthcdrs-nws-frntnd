import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchArticles } from '../actions';
import { Loading, HomepageUI, Footer } from '../components';

class Homepage extends Component {
  
  componentDidMount () {
    const { fetchArticles } = this.props;
    fetchArticles();
  }

  render () {
    const { articles, loading, error } = this.props;
    return (
      <div className="homepage">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> : (
          <div className="container">
            <div className="row">
              { Object.values(articles)
                .map((article, i) => (
                  <div key={ i } className="col-md-6 card-group">
                    <HomepageUI 
                      article={ article }
                    />
                  </div>
                ))}
            </div>
            <Footer /> 
          </div>
        ) }
      </div>
    );
  }
}

Homepage.propTypes = {
  articles: PT.oneOfType([ PT.object, PT.array ]).isRequired,
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
