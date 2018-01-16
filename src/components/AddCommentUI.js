import React, { Component } from 'react';
import PT from 'prop-types';

class AddCommentUI extends Component {

  constructor(props){
    super(props)
    this.state = {
      comment: ''
    };
  };

  handleCommentChange = (event) => {
    event.preventDefault();
    this.setState({
      comment: event.target.value
    });
  }

  handlePostCommentClick = (event) => {
    event.preventDefault();
    const { comment } = this.state;
    const { handlePostComment, articleId } = this.props;
    if (comment.length >= 1) {
      handlePostComment(event, articleId, comment);
      this.setState({
        comment: ''
      });
      this.refs.addNewComment.value = ''
    }
  }

  render () {
    return (
      <div className="add-comment">
        <form className="comment-box">
          <fieldset>
            <div className="form-group">
              <textarea className="comment-input" type="text" rows="3" ref="addNewComment" placeholder="Type your comment here..." onChange={ this.handleCommentChange }></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary submit-comment" type="submit" onClick={ this.handlePostCommentClick }>Submit Comment</button>
            </div>
          </fieldset>     
        </form>
      </div>
    );
  }
}

AddCommentUI.propTypes = {
  handlePostComment: PT.func.isRequired,
  articleId: PT.string
};

export default AddCommentUI;
