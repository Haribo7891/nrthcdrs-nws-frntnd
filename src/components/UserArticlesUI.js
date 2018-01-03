import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const UserArticlesUI = ({ article }) => (
  <div className="user-article-card-color card-body">
    <blockquote className="card-blockquote">
      <div className="card-title">
        <h5><Link to={ { pathname: `/articles/${ article._id }/comments`, state: article } }>{ article.title }</Link></h5>
        <p></p>
      </div>
      <div className="footer">
        <footer className="card-footer">
          <ul className="list-inline">
            <span className="article-info">
              <li className="card-link list-inline-item">
                Votes: { article.votes }
              </li>
              <li className="card-link list-inline-item">
                Topic: <Link to={ `/topics/${ article.belongs_to }/articles` }>{ article.belongs_to }</Link>
              </li>
            </span>
          </ul>
        </footer>
      </div>
    </blockquote>
  </div>
);

UserArticlesUI.propTypes = {
  article: PT.object.isRequired
};

export default UserArticlesUI;
