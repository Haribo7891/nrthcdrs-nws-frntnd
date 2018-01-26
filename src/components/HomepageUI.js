import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const HomepageUI = ({ article: { _id: articleId, votes, created_by: username, belongs_to: topic, title } }) => (
  <div className="card text-center border-info wiggle2-me">
    <div className="homepage-article-color card-body">
      <blockquote className="card-blockquote">
        <div className="card-title">
          <h6><Link to={ `/articles/${ articleId }` }>{ title }</Link></h6>
          <p></p>
        </div>
        <div className="justify-content-between">
          <footer className="card-footer">
            <span className="card-link">
              <span><img src="/img/smile-o.png" width="20px" alt="smile-o"/> { votes }</span>
            </span>
            <span className="card-link">
              <span><Link to={ `/topics/${ topic }/articles` }><img className="wiggle-me" src={ `/img/${ topic }.png` } width="20px" alt={ `${ topic }` }/></Link></span>
            </span>
            <span className="card-link">
              <span><img src="/img/user.png" width="20px" alt="user"/> <Link to={ `/user/${ username }` }>{ username }</Link></span>
            </span>
          </footer>
        </div>
      </blockquote>
    </div>
  </div>
);

HomepageUI.propTypes = {
  article: PT.oneOfType([ PT.object, PT.array ]).isRequired
};
  
export default HomepageUI;
