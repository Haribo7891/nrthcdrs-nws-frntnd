import React from 'react';
import { NavLink } from 'react-router-dom';
import PT from 'prop-types';

const TopicsUI = ({ topics }) => (
  <div className="topic-links">
    <div className="navbar-links">
      <div className="topic-title">
        Filter by topic:
      </div>
      { Object.values(topics)
        .map((topic, i) => (
          <span key={ i } className="">
            <span className="nav-item">
              <NavLink className="nav-link list-inline-item badge badge-pill badge-light" to={ `/topics/${ topic.slug }/articles` }>{ topic.slug }</NavLink>                
            </span>
          </span>
        )) }
    </div>
  </div>
);

TopicsUI.propTypes = {
  topics: PT.object.isRequired
};

export default TopicsUI;
