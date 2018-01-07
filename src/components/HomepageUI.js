import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const HomepageUI = ({ articles }) => (
  <div className="list-item">
    { Object.values(articles)
      .map((article, i) => (
        <div key={ i } className="card-group">
          <div className="card text-center border-info">
            <div className="homepage-article-color card-body">
              <blockquote className="card-blockquote">
                <div className="card-title">
                  <h5><Link to={ `/articles/${ article._id }/comments` }>{ article.title }</Link></h5>
                  <p></p>
                </div>
                <div className="footer">
                  <footer className="card-footer">
                    <ul className="list-inline">
                      <span>
                        <li className="card-link list-inline-item">
                          Votes: { article.votes }
                        </li>
                        <li className="card-link list-inline-item">
                          Topic: <Link to={ `/topics/${ article.belongs_to }/articles` }>{ article.belongs_to }</Link>
                        </li>
                        <li className="card-link list-inline-item">
                          Author: <Link to={ `/user/${ article.created_by }` }>{ article.created_by }</Link>
                        </li>
                      </span>
                    </ul>
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
  articles: PT.object.isRequired
};
  
export default HomepageUI;
