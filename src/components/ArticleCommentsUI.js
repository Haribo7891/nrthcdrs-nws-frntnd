import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const ArticleCommentsUI = () => (
  <div className="comment-text">
    <p className="comment-body">*** COMMENT TEXT ***</p>
    <p>*** USER WHO POSTED ***</p>
    <p><span className="date">Posted on { new Date().toDateString() }</span></p>
  </div>
);

ArticleCommentsUI.propTypes = {

};
  
export default ArticleCommentsUI;
