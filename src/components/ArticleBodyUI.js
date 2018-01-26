import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const ArticleBodyUI = ({ article: { title, created_by: username, belongs_to: topic, body } }) => (
  <div className="article-body article">
    <div className="card border-warning">
      <div className="card-body">
        <blockquote className="card-blockquote">
          <div className="card-title">
            <h3>{ title }</h3>
          </div>
          <footer className="card-footer">
            <div className="row justify-content-between">
              <div className="col small">
                <div><Link to={ `/topics/${ topic }/articles` }><img className="wiggle-me" src={ `/img/${ topic }.png` } width="20px" alt={ `${ topic }` }/></Link></div>
              </div>
              <div className="col small">
                <div><img src="/img/user.png" width="20px" alt="user"/> <Link to={ `/user/${ username }` }>{ username }</Link></div>
              </div>
            </div>
          </footer>
          <p className="article-body-text text-justify">
            { body }
          </p>
        </blockquote>
      </div>
    </div>
  </div>
);

ArticleBodyUI.propTypes = {
  article: PT.oneOfType([ PT.object, PT.array ]).isRequired,
};

export default ArticleBodyUI;
