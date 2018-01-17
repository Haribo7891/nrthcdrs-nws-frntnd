import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const UserArticlesUI = ({ article: { _id: articleId, title, votes, belongs_to: topic } }) => (
  <div className="user-article-card-color card-body">
    <blockquote className="card-blockquote">
      <div className="card-title">
        <h5><Link to={ `/articles/${ articleId }` }>{ title }</Link></h5>
        <p></p>
      </div>
      <div className="footer">
        <footer className="card-footer">
          <ul className="list-inline">
            <span className="article-info">
              <span className="card-link">
                <span><img src="/img/smile-o.png" width="20px" alt="smile-o"/> { votes }</span>
              </span>
              <span className="card-link">
                <span><Link to={ `/topics/${ topic }/articles` }><img className="wiggle-me" src={ `/img/${ topic }.png` } width="20px" alt={ `${ topic }` }/></Link></span>
              </span>
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
