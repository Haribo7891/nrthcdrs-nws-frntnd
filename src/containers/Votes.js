import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

class Votes extends Component {

  render () {
    return (
      <div className="votesUI">
        *** VotesUI Component ***
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
