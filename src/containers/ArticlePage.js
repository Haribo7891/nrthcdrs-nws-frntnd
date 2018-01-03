import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { Loading } from '../components';

class ArticlePage extends Component {
  
  render () {
    const { loading, error } = this.props;
    return (
      <div className="container">
        <div className="card border-secondary">
          <div className="article-card-color">
            *** Hello ArticleBody container ***
          </div>        
          { error && <Redirect to="/404" /> }
          { loading ? <Loading /> : (
            <div className="articleCard-text article-card-color">
              <h4>Other user comments:</h4>
              *** Hello ArticleComments container ***
            </div>
          )}
        </div>
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
