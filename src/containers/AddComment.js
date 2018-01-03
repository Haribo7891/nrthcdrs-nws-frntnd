import React, { Component } from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';

class AddComment extends Component {
  
  render () {
    return (
      <div className="add-comment">
        *** AddCommentUI component ***
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
