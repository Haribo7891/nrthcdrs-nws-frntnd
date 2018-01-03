import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { VotesUI } from '../components';

class Votes extends Component {

  render () {
    return (
      <div className="votesUI">
        <VotesUI />
      </div>
    );
  }
}

Votes.propTypes = {

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Votes);
