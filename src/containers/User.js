import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchUser } from '../actions';
import { Loading, UserBodyUI } from '../components';

class User extends Component {
  
  componentDidMount () {
    const username = this.props.match.params.username;    
    this.props.fetchUser(username);
  }

  render () {
    const { userData, loading, error } = this.props;
    return (
      <div className="user container">
        <h1>Author Information</h1>
        { error && <Redirect to="/404" /> }
        { loading ? <Loading /> : (
          <div className="card border-secondary">
            <UserBodyUI 
              userData={ userData }
            />
          </div>
        ) }
      </div>
    );
  }
}

User.propTypes = {
  userData: PT.object.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchUser: PT.func.isRequired,
};

const mapStateToProps = (state) => ({
  userData: state.userReducer.data,
  loading: state.userReducer.loading,
  error: state.userReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (username) => {
    dispatch(fetchUser(username));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
