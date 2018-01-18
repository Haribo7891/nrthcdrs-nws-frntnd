import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const HomepageUI = ({ articles }) => (
  <div className="homepage list-item">
    { Object.values(articles)
      .map((article, i) => (
        <div key={ i } className="card-group">
          <div className="card text-center border-info">
            <div className="homepage-article-color card-body">
              <blockquote className="card-blockquote">
                <div className="card-title">
                  <h5><Link to={ `/articles/${ article._id }` }>{ article.title }</Link></h5>
                  <p></p>
                </div>
                <div className="justify-content-between">
                  <footer className="card-footer">
                    <span className="card-link">
                      <span><img src="/img/smile-o.png" width="20px" alt="smile-o"/> { article.votes }</span>
                    </span>
                    <span className="card-link">
                      <span><Link to={ `/topics/${ article.belongs_to }/articles` }><img className="wiggle-me" src={ `/img/${ article.belongs_to }.png` } width="20px" alt={ `${ article.belongs_to }` }/></Link></span>
                    </span>
                    <span className="card-link">
                      <span><img src="/img/user.png" width="20px" alt="user"/> <Link to={ `/user/${ article.created_by }` }>{ article.created_by }</Link></span>
                    </span>
                  </footer>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      )) }
  </div> 
);

HomepageUI.propTypes = {
  articles: PT.oneOfType([ PT.object, PT.array ]).isRequired
};
  
export default HomepageUI;
