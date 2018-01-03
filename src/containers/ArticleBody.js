import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { Loading } from '../components';

class ArticleBody extends Component {
  
  render () {
    const { loading, error } = this.props;
    return (
      <div className="article-body">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading/> :
          <div className="articleBodyUI">
            *** Hello ArticleBodyUI component ***
          </div>
        }
      </div>
    );
  }
}

ArticleBody.propTypes = {
  loading: PT.bool.isRequired,
  error: PT.any,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleBody);
