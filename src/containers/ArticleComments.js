import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { Loading, ArticleCommentsUI } from '../components';
import { Votes } from '../containers';

class ArticleComments extends Component {
  
  render () {
    const { comments, loading, error } = this.props;
    return (
      <div className="article-comments">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> :
          <div className="articleCommentsUI">
            { Object.values(comments).map((comment, i) => (
              <div key={ i } className="comment card border-success">
                <ArticleCommentsUI 
                  comment={ comment }
                />
                <Votes 
                  commentVotes={ comment.votes }
                />
              </div>
            )) }
          </div>
        }
      </div>
    );
  }
}

ArticleComments.propTypes = {
  comments: PT.object.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);
