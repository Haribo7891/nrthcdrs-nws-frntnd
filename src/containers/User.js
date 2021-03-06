import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT, { object } from 'prop-types';

import { fetchUser, fetchArticles } from '../actions';
import { Loading, UserArticlesUI, UserBodyUI, Footer } from '../components';

class User extends Component {
  
  componentDidMount () {
    const { fetchArticles, fetchUser, match: { params: { username } } } = this.props;  
    fetchUser(username);
    fetchArticles();
  }

  render () {
    const { articles, userData, loading, error, match: { params: { username } } } = this.props;
    const userArticles = articles.filter((article) => article.created_by === username );
    return (
      <div className="user">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> : (
          <div className="container">
            <UserBodyUI 
              userData={ userData }
            />
            <div className="row">
              { userArticles.map((article, i) => (
                <div key={ i } className="col-md-6 card-group">
                  <UserArticlesUI 
                    article={ article }
                  />
                </div>
              )) }
            </div>
            <Footer />
          </div>
        ) }
      </div>
    );
  }
}

User.propTypes = {
  userData: PT.object.isRequired,
  articles: PT.arrayOf(object).isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchUser: PT.func.isRequired,
  fetchArticles: PT.func.isRequired
};

const mapStateToProps = (state) => {
  const {
    data: articles,
    loading: articlesLoading,
    error: articlesError
  } = state.articlesReducer;

  const {
    data: userData,
    loading: userLoading,
    error: userError
  } = state.userReducer;

  return {
    articles,
    userData,
    loading: articlesLoading || userLoading,
    error: articlesError || userError
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (username) => {
    dispatch(fetchUser(username));
  },
  fetchArticles: () => {
    dispatch(fetchArticles());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
