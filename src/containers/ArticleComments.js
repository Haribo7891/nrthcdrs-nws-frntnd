import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { Loading, ArticleCommentsUI } from '../components';
import { Votes } from '../containers';

class ArticleComments extends Component {
  
  render () {
    const { loading, error } = this.props;
    return (
      <div className="article-comments">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> :
          <div className="articleCommentsUI">
            <ArticleCommentsUI />
            <Votes />
          </div>
        }
      </div>
    );
  }
}

ArticleComments.propTypes = {
  loading: PT.bool.isRequired,
  error: PT.any,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);
