import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const ArticleCommentsUI = ({ comment: { body, created_by: username, created_at } }) => (
  <div className="article-card container comment-color">
    <div className="comment-text">
      <p className="comment-body">{ body }</p>
      <p><img src="/img/user.png" width="20px" alt="user"/><Link className="comment-author" to={ `/user/${ username }` }>{ username }</Link></p>
      <p><span className="date"><img src="/img/calendar.png" width="20px" alt="calendar"/> { new Date(created_at).toDateString() }</span></p>
    </div>
  </div>
);

ArticleCommentsUI.propTypes = {
  comment: PT.oneOfType([ PT.object, PT.array ]).isRequired
};
  
export default ArticleCommentsUI;
