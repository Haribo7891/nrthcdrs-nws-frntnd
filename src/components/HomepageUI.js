import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const HomepageUI = ({ article: { _id: articleId, votes, created_by: username, belongs_to: topic, title } }) => (
  <div className="card text-center border-info wiggle2-me">
    <div className="homepage-article-color card-body">
      <div className="card-title">
        <h6><Link to={ `/articles/${ articleId }` }>{ title }</Link></h6>
        <p></p>
      </div>
      <footer className="card-footer">
        <div className="row justify-content-between">
          <div className="col small">
            <div><Link to={ `/articles/${ articleId }` }><img src="/img/smile-o.png" width="20px" alt="smile-o"/></Link> { votes }</div>
          </div>
          <div className="col small">
            <div><Link to={ `/topics/${ topic }/articles` }><img className="wiggle-me" src={ `/img/${ topic }.png` } width="20px" alt={ `${ topic }` }/></Link></div>
          </div>
          <div className="col small">
            <div><Link to={ `/user/${ username }` }><img src="/img/user.png" width="20px" alt="user"/></Link></div>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

HomepageUI.propTypes = {
  article: PT.oneOfType([ PT.object, PT.array ]).isRequired
};
  
export default HomepageUI;
