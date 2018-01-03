import React from 'react';
import PT from 'prop-types';

const AddCommentUI = () => (
  <div className="add-comment">
    <form className="comment-box">
      <fieldset>
        <div className="form-group">
          <textarea className="comment-input" type="text" onChange="" value="" rows="3" placeholder="Type your comment here..."></textarea>
          <button className="btn btn-primary submit-comment" type="submit" onSubmit="" onClick="" value="">Submit</button>
        </div>
      </fieldset>     
    </form>
  </div>
);

AddCommentUI.propTypes = {

};

export default AddCommentUI;
