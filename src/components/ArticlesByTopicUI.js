import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesByTopicUI = ({ article: { _id: articleId, votes, created_by: username, title } }) => (
  <div className="card text-center border-danger">
    <div className="article-list-color card-body">
      <blockquote className="card-blockquote">
        <div className="card-title">
          <h5><Link to={ `/articles/${ articleId }` }>{ title }</Link></h5>
          <p></p>
        </div>
        <div className="footer">
          <footer className="card-footer">
            <span className="card-link">
              <span><img src="/img/smile-o.png" width="20px" alt="smile-o"/> { votes }</span>
            </span>
            <span className="card-link">
              <span><img src="/img/user.png" width="20px" alt="user"/> <Link to={ `/user/${ username }` }>{ username }</Link></span>
            </span>
          </footer>
        </div>
      </blockquote>
    </div>
  </div>
);
  
export default ArticlesByTopicUI;
