import React from 'react';
import PT from 'prop-types';

const UserBodyUI = ({ userData: { name, username, avatar_url: userAvatar } }) => (
  <div className="card card-margin">
    <div className="card-body user-info-header">
      <div className="card-title">
        <h2>{ name }</h2>
        <h5 className="card-subtitle text-muted">Username: { username }</h5>
      </div>
      <div className="author-image">
        <img className="avatar wiggle-me" src={ userAvatar } height="150px" alt="user avatar"/>
      </div>
    </div>
    <div>
      { ( username !== 'northcoder') && <h4>More articles by { name }:</h4> }        
    </div>
  </div>
);

UserBodyUI.propTypes = {
  userData: PT.object.isRequired
};
  
export default UserBodyUI;
