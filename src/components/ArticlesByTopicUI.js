import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesByTopicUI = ({ article: { _id, votes, created_by, title } }) => (
  <div className="card text-center border-danger">
    <div className="article-list-color card-body">
      <blockquote className="card-blockquote">
        <div className="card-title">
          <h5><Link to={ `/articles/${ _id }` }>{ title }</Link></h5>
          <p></p>
        </div>
        <div className="footer">
          <footer className="card-footer">
            <ul className="list-inline">
              <span>
                <li className="card-link list-inline-item">
                  Votes: { votes }
                </li>
                <li className="card-link list-inline-item">
                  Author: <Link to={ `/user/${ created_by }` }>{ created_by }</Link>
                </li>
              </span>
            </ul>
          </footer>
        </div>
      </blockquote>
    </div>
  </div>
);
  
export default ArticlesByTopicUI;
