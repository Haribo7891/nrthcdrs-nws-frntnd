import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { AddCommentUI } from '../components';

class AddComment extends Component {
  
  render () {
    return (
      <div className="add-comment">
        <AddCommentUI />
      </div>
    );
  }
}

AddComment.propTypes = {

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
