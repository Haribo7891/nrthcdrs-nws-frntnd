import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const ArticlesByTopicUI = ({ article }) => (
  <div className="card text-center border-danger">
    <div className="article-list-color card-body">
      <blockquote className="card-blockquote">
        <div className="card-title">
          <h5><Link to={ { pathname: `/articles/${ article._id }/comments`, state: article } }>{ article.title }</Link></h5>
          <p></p>
        </div>
        <div className="footer">
          <footer className="card-footer">
            <ul className="list-inline">
              <span>
                <li className="card-link list-inline-item">
                  Votes: { article.votes }
                </li>
                <li className="card-link list-inline-item">
                  Author: <Link to={ `/user/${ article.created_by }` }>{ article.created_by }</Link>
                </li>
              </span>
            </ul>
          </footer>
        </div>
      </blockquote>
    </div>
  </div>
);

ArticlesByTopicUI.propTypes = {
  article: PT.object.isRequired
};
  
export default ArticlesByTopicUI;
