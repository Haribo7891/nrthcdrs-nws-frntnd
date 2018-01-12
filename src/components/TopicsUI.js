import React from 'react';
import { NavLink } from 'react-router-dom';
import PT from 'prop-types';

const TopicsUI = ({ topics }) => (
  <div className="topic-links">
    <div className="navbar-links">
      <div className="topic-title">
        Filter by topic:
      </div>
      <NavLink className="nav-link list-inline-item badge badge-pill badge-light wiggle-me" to="/">ALL TOPICS</NavLink>                
      { Object.values(topics)
        .map((topic) => (
          <span key={ topic.slug } className="">
            <span className="nav-item">
              <NavLink className="nav-link list-inline-item badge badge-pill badge-light wiggle-me" to={ `/topics/${ topic.slug }/articles` }>{ topic.slug.toUpperCase() }</NavLink>                
              <span></span>
            </span>
          </span>
        )) }
    </div>
  </div>
);

TopicsUI.propTypes = {
  topics: PT.any.isRequired
};

export default TopicsUI;
