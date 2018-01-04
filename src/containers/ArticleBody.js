import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { Loading, ArticleBodyUI } from '../components';
import { Votes } from '../containers';

class ArticleBody extends Component {
  
  render () {
    const { article, loading, error } = this.props;
    return (
      <div className="article-body">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> :
          <div className="articleBodyUI">
            <ArticleBodyUI 
              article={ article }
            />
            <Votes 
              articleVotes={ article.votes }
            />
          </div>
        }
      </div>
    );
  }
}

ArticleBody.propTypes = {
  article: PT.object.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleBody);
