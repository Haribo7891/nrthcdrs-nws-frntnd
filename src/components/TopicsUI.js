import React from 'react';
import { NavLink } from 'react-router-dom';
import PT from 'prop-types';

const TopicsUI = ({ topic: { slug: topicName } }) => (
  <span className="nav-item">
    <NavLink className="nav-link list-inline-item badge badge-pill badge-light wiggle-me" to={ `/topics/${ topicName }/articles` }>{ topicName.toUpperCase() }</NavLink>                
    <span></span>
  </span>
);

TopicsUI.propTypes = {
  topic: PT.object.isRequired
};

export default TopicsUI;
