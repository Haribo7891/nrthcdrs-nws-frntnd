import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const ArticleCommentsUI = ({ comment: { body, created_by: username, created_at } }) => (
  <div className="article-comment-card card-margin container">
    <div className="article-comment-text">
      <p className="article-comment-body article text-justify">"{ body }" said <Link to={ `/user/${ username }` }><img src="/img/user.png" width="20px" alt="user"/>{ username }</Link></p>
      <p><span className="article-comment-date small"><img src="/img/calendar.png" width="20px" alt="calendar"/> { new Date(created_at).toDateString() }</span></p>
    </div>
  </div>
);

ArticleCommentsUI.propTypes = {
  comment: PT.oneOfType([ PT.object, PT.array ]).isRequired
};
  
export default ArticleCommentsUI;
