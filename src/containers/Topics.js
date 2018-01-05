import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PT from 'prop-types';

import { fetchTopics } from '../actions';
import { Loading, TopicsUI } from '../components';

class Topics extends Component {
  
  componentDidMount () {
    this.props.fetchTopics();
  }

  render () {
    const { topics, loading, error } = this.props;
    return (
      <div className="navbar-topics">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading/> :
          <TopicsUI 
            topics={ topics }
          />
        }
      </div>
    );
  }
}

Topics.propTypes = {
  topics: PT.object.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchTopics: PT.func.isRequired
};

const mapStateToProps = (state) => ({
  topics: state.topicsReducer.data,
  loading: state.topicsReducer.loading,
  error: state.topicsReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  fetchTopics: () => {
    dispatch(fetchTopics());
  }
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Topics);
