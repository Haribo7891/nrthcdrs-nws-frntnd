import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const ArticlesByTopicUI = ({ article: { _id: articleId, votes, created_by: username, title } }) => (
  <div className="card card-margin text-center border-danger wiggle2-me">
    <div className="article-list-color card-body">
      <div className="card-title">
        <h6><Link to={ `/articles/${ articleId }` }>{ title }</Link></h6>
        <p></p>
      </div>
      <footer className="card-footer">
        <div className="row justify-content-between">
          <div className="col small">
            <div>{ votes } <Link to={ `/articles/${ articleId }` }><img src="/img/smile-o.png" width="20px" alt="smile-o"/></Link></div>
          </div>
          <div className="col small">
            <div><img src="/img/user.png" width="20px" alt="user"/> <Link to={ `/user/${ username }` }>{ username }</Link></div>
          </div>
        </div>
      </footer>
    </div>
  </div>
);
  
ArticlesByTopicUI.propTypes = {
  article: PT.object.isRequired
};

export default ArticlesByTopicUI;
