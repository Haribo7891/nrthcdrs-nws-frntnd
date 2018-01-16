import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const UserArticlesUI = ({ article: { _id, title, votes, belongs_to } }) => (
  <div className="user-article-card-color card-body">
    <blockquote className="card-blockquote">
      <div className="card-title">
        <h5><Link to={ `/articles/${ _id }` }>{ title }</Link></h5>
        <p></p>
      </div>
      <div className="footer">
        <footer className="card-footer">
          <ul className="list-inline">
            <span className="article-info">
              <li className="card-link list-inline-item">
                Votes: { votes }
              </li>
              <li className="card-link list-inline-item">
                Topic: <Link to={ `/topics/${ belongs_to }/articles` }>{ belongs_to }</Link>
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
