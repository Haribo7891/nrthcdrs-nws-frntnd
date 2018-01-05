import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const ArticleCommentsUI = ({ comment: { body, created_by, created_at } }) => (
  <div className="article-card container comment-color">
    <div className="comment-text">
      <p className="comment-body">{ body }</p>
      <p><Link className="comment-author" to={ `/user/${ created_by }` }>By: { created_by }</Link></p>
      <p><span className="date">Posted on { new Date(created_at).toDateString() }</span></p>
    </div>
  </div>
);

ArticleCommentsUI.propTypes = {
  comment: PT.object.isRequired
};
  
export default ArticleCommentsUI;
