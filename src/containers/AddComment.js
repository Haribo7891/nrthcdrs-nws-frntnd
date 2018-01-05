import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { postComment } from '../actions';

class AddComment extends Component {
  
  render () {
    let input;
    const { postComment, articleId } = this.props;
    return (
      <div className="add-comment">
        <form 
          className="comment-box" 
          onSubmit={ (event) => {
            event.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            postComment(articleId, input.value);
            input.value = '';
          } }>
          <fieldset>
            <div className="form-group">
              <textarea className="comment-input" type="text" rows="3" ref={ (node) => { input = node; } } placeholder="Type your comment here..." ></textarea>
              <button className="btn btn-primary submit-comment" type="submit" >Submit</button>
            </div>
          </fieldset>     
        </form>
      </div>
    );
  }
}

AddComment.propTypes = {
  postComment: PT.func.isRequired,
  articleId: PT.string.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (articleId, comment) => {
    dispatch(postComment(articleId, comment));
  }
});

export default connect(null, mapDispatchToProps)(AddComment);
