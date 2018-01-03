import React from 'react';
import { NavLink } from 'react-router-dom';
import PT from 'prop-types';

const TopicsUI = ({ topics }) => (
  <div className="topic-links">
    <div className="navbar-links">
      { Object.values(topics)
        .map((topic, i) => (
          <ul key={ i } className="navbar-nav list-inline">
            <li className="nav-item">
              <NavLink className="nav-link list-inline-item badge badge-pill badge-light" to={ `/topics/${ topic.slug }/articles` }>{ topic.slug }</NavLink>                
            </li>
          </ul>
        )) }
    </div>
  </div>
);

TopicsUI.propTypes = {
  topics: PT.array.isRequired
};

export default TopicsUI;
