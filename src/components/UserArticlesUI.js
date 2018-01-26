import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const UserArticlesUI = ({ article: { _id: articleId, title, votes, belongs_to: topic } }) => (
  <div className="card text-center border-success wiggle2-me">
    <div className="user-article-card-color card-body">
      <div className="card-title">
        <h6><Link to={ `/articles/${ articleId }` }>{ title }</Link></h6>
        <p></p>
      </div>
      <div className="footer">
        <footer className="card-footer">
          <div className="row justify-content-between">
            <div className="col small">
              <div><Link to={ `/articles/${ articleId }` }><img src="/img/smile-o.png" width="20px" alt="smile-o"/></Link> { votes }</div>
            </div>
            <div className="col small">
              <div><Link to={ `/topics/${ topic }/articles` }><img className="wiggle-me" src={ `/img/${ topic }.png` } width="20px" alt={ `${ topic }` }/></Link></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
);

UserArticlesUI.propTypes = {
  article: PT.object.isRequired
};

export default UserArticlesUI;
