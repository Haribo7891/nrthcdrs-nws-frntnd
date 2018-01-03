import React from 'react';
import PT from 'prop-types';

const VotesUI = () => (
  <div className="buttonsContainer">
    <span>Vote: </span>
    <img src="/img/thumbs-up.svg" width="20px" alt="thumbs-up" onClick="" />
    <span>*** VOTE COUNT ***</span>
    <img src="/img/thumbs-down.svg" width="20px" alt="thumbs-down" onClick="" />
    <img src="/img/cup.svg" width="20px" alt="delete" onClick="" />
  </div>
);

VotesUI.propTypes = {

};

export default VotesUI;
