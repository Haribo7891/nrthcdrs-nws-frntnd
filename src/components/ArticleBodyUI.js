import React from 'react';
import { Link } from 'react-router-dom';
import PT from 'prop-types';

const ArticleBodyUI = () => (
  <div className="article-body">
    <div className="card border-warning homepage-article-color">
      <div className="card-body">
        <blockquote className="card-blockquote">
          <div className="card-title">
            <h2>*** ARTICLE TITLE ***</h2>
          </div>
          <div className="footer">
            <footer className="card-footer">
              <ul className="list-inline">
                <span className="article-info">
                  <li className="card-link list-inline-item">
                    Author: *** AUTHOR NAME ***
                  </li>
                  <li className="card-link list-inline-item">
                    Topic: *** TOPIC NAME ***
                  </li>
                </span>
              </ul>
            </footer>
          </div>
          <p className="article-text">
            *** ARTICLE BODY TEXT ***
          </p>
        </blockquote>
      </div>
    </div>
  </div>
);

ArticleBodyUI.propTypes = {

};
  
export default ArticleBodyUI;
