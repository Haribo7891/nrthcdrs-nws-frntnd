import React from 'react';
import PT from 'prop-types';

const UserBodyUI = ({ userData }) => {
  let currentUserName, currentUserAvatar, currentUserUsername;
  if (userData.user) {
    currentUserAvatar = userData.user.avatar_url;
    currentUserUsername = userData.user.username;
    currentUserName = userData.user.name;
  }
  
  return (
    <div className="card card-margin">
      <div className="card-body user-info-header">
        <div className="card-title">
          <h2>{ currentUserName }</h2>
          <h5 className="card-subtitle text-muted">Username: { currentUserUsername }</h5>
        </div>
        <div className="author-image">
          <img className="avatar wiggle-me" src={ currentUserAvatar } height="150px" alt="user avatar"/>
        </div>
      </div>
      <div>
        { (currentUserUsername !== 'northcoder') && <h4>More articles by { currentUserName }:</h4> }        
      </div>
    </div>
  );
};

UserBodyUI.propTypes = {
  userData: PT.object.isRequired
};
  
export default UserBodyUI;
