import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const ArticleBodyUI = ({ article }) => (
  <div className="article-body">
    <div className="card border-warning homepage-article-color">
      <div className="card-body">
        <blockquote className="card-blockquote">
          <div className="card-title">
            <h2>{ article.title }</h2>
          </div>
          <div className="footer">
            <footer className="card-footer">
              <ul className="list-inline">
                <span className="article-info">
                  <li className="card-link list-inline-item">
                    Author: <Link to={ `/user/${ article.created_by }` }>{ article.created_by }</Link>
                  </li>
                  <li className="card-link list-inline-item">
                    Topic: <Link to={ `/topics/${ article.belongs_to }/articles` }>{ article.belongs_to }</Link>
                  </li>
                </span>
              </ul>
            </footer>
          </div>
          <p className="article-text">
            { article.body }
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
