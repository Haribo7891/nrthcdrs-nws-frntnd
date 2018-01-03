import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchUser, fetchArticles } from '../actions';
import { UserArticlesUI, UserBodyUI, Loading } from '../components';

class User extends Component {
  
  componentDidMount () {
    const username = this.props.match.params.username;    
    this.props.fetchUser(username);
    this.props.fetchArticles();
  }

  render () {
    const { articles, userData, loading, error } = this.props;
    const userArticles = Object.values(articles).filter((article) => {
      return article.created_by === this.props.match.params.username;
    });
    return (
      <div className="user container">
        <h1>Author Information</h1>
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> : (
          <div className="card border-secondary">
            <UserBodyUI 
              userData={ userData }
            />
            <div className="articleCard-text">
              { userArticles
                .map((article, i) => (
                  <div key={ i } className="card border-success">
                    <UserArticlesUI 
                      article={ article }
                    />
                  </div>
                )) }
            </div>
          </div>
        ) }
      </div>
    );
  }
}

User.propTypes = {
  userData: PT.object.isRequired,
  articles: PT.array.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchUser: PT.func.isRequired,
  fetchArticles: PT.func.isRequired
};

const mapStateToProps = (state) => ({
  articles: state.articlesReducer.data,  
  userData: state.userReducer.data,
  loading: state.userReducer.loading,
  error: state.userReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (username) => {
    dispatch(fetchUser(username));
  },
  fetchArticles: () => {
    dispatch(fetchArticles());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
