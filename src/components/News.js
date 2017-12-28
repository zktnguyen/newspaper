import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NewsTab from './NewsTab';
import NewsList from './NewsList';

class News extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: null
    };
  }

  render() {
    const { topics } = this.props;
    const newsTabs = topics.map(topic => (<NewsTab topic={topic} key={topic} />));
    const newsList = topics.map(query => (<NewsList query={query} key={query} />));
    return (
      <div className="container-fluid news-portion">
        <div className="row">
          <div className="col-xs-12">
            <ul className="nav nav-pills">
              {newsTabs}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {newsList}
          </div>
        </div>
      </div>
    );
  }
};

News.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default News;
