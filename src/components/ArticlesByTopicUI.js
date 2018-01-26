import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const ArticlesByTopicUI = ({ article: { _id: articleId, votes, created_by: username, title } }) => (
  <div className="articles-by-topic card border-danger">
    <div className="article-list-color card-body">
      <div className="card-title">
        <h6><Link to={ `/articles/${ articleId }` }>{ title }</Link></h6>
        <p></p>
      </div>
      <footer className="card-footer">
        <div className="row justify-content-between">
          <div className="col-md-4 small">
            <div><img src="/img/smile-o.png" width="20px" alt="smile-o"/> { votes }</div>
          </div>
          <div className="col-md-7 small">
            <div><img src="/img/user.png" width="20px" alt="user"/> <Link to={ `/user/${ username }` }>{ username }</Link></div>
          </div>
        </div>
      </footer>
    </div>
  </div>
);
  
ArticlesByTopicUI.propTypes = {
  article: PT.oneOfType([ PT.object, PT.array ]).isRequired
};

export default ArticlesByTopicUI;
