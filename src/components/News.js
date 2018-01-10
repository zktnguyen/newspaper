import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getNews } from '../actions/news';
import NewsTabs from './NewsTabs';
import NewsTab from './NewsTab';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: null
    };
    const { topics } = this.props;
    const cachedLength = Math.min(topics.length, 3);
    for (let i = 0; i < cachedLength; i++) {
      this.props.getNews(topics[i]);
    }
  }

  render() {
    const { topics } = this.props;

    const newsTabs = topics.map(topic => (<NewsTab topic={topic} key={topic} />));

    // const newsList = topics.map(query => (<NewsList query={query} key={query} />));

    return (
      <div className="container-fluid news-portion">
        <div className="row">
          <div className="col-xs-12">
            <NewsTabs topics={topics}>{ newsTabs }</NewsTabs>
          </div>
        </div>
      </div>
    );
  }
};

News.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  getNews: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNews }, dispatch);
}

export default connect(null, mapDispatchToProps)(News);
