import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const ArticleBodyUI = ({ article: { title, created_by, belongs_to, body } }) => (
  <div className="article-body">
    <div className="card border-warning homepage-article-color">
      <div className="card-body">
        <blockquote className="card-blockquote">
          <div className="card-title">
            <h2>{ title }</h2>
          </div>
          <div className="footer">
            <footer className="card-footer">
              <ul className="list-inline">
                <span className="article-info">
                  <li className="card-link list-inline-item">
                    Author: <Link to={ `/user/${ created_by }` }>{ created_by }</Link>
                  </li>
                  <li className="card-link list-inline-item">
                    Topic: <Link to={ `/topics/${ belongs_to }/articles` }>{ belongs_to }</Link>
                  </li>
                </span>
              </ul>
            </footer>
          </div>
          <p className="article-text">
            { body }
          </p>
        </blockquote>
      </div>
    </div>
  </div>
);

ArticleBodyUI.propTypes = {
  article: PT.object.isRequired
};
  
export default ArticleBodyUI;
