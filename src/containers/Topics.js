import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PT, { object } from 'prop-types';

import { fetchTopics } from '../actions';
import { Loading, TopicsUI } from '../components';

class Topics extends Component {
  
  componentDidMount () {
    const { fetchTopics } = this.props;
    fetchTopics();
  }

  render () {
    const { topics, loading, error } = this.props;
    return (
      <div className="navbar-topics">
        { error && <Redirect to="/404" /> }
        { loading ? <Loading/> :
          <div className="topic-links">
            <div className="navbar-links">
              <div className="topic-title">
                Filter by topic:
              </div>
              <NavLink className="nav-link list-inline-item badge badge-pill badge-light wiggle-me" to="/">ALL TOPICS</NavLink>
              { topics.map((topic, i) => (
                <span key={ i }>
                  <TopicsUI 
                    topic={ topic }
                  />
                </span>
              )) }
            </div>
          </div>
        }
      </div>
    );
  }
}

Topics.propTypes = {
  topics: PT.arrayOf(object).isRequired,
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
