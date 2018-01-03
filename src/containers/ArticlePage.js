import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { Loading } from '../components';
import { ArticleBody, ArticleComments, AddComment } from '../containers';

class ArticlePage extends Component {
  
  render () {
    const { loading, error } = this.props;
    return (
      <div className="container">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> : (
          <div className="card border-secondary">
            <div className="article-page-color">
              <ArticleBody />
              <AddComment />
            </div>        
            <div className="articleCard-text article-page-color">
              <h4>Other user comments:</h4>
              <ArticleComments />
            </div>
          </div>
        ) }
      </div>
    );
  }
}

ArticlePage.propTypes = {
  loading: PT.bool.isRequired,
  error: PT.any
};

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
