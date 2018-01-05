import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { Loading, ArticleCommentsUI, VoteCommentUI } from '../components';

class ArticleComments extends Component {

  render () {
    const { comments, loading, error, handleCommentVoteClick, handleDeleteComment } = this.props;
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
                <VoteCommentUI 
                  commentVotes={ comment.votes }
                  commentId={ comment._id }
                  handleCommentVoteClick={ handleCommentVoteClick }
                  deleteNorthcoder={ comment.created_by === 'northcoder' }
                  handleDeleteComment={ handleDeleteComment }
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

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);
