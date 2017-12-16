import React from 'react';
import PropTypes from 'prop-types';
import NewsTab from './NewsTab';

const News = ({ topics }) => {
  const newsTabs = topics.map(topic => (<NewsTab topic={topic} key={topic} />));
  return (
    <div className="container-fluid news-portion">
      <div className="col-xs-12">
        <ul className="nav nav-pills">
          {newsTabs}
        </ul>
      </div>
    </div>
  );
};

News.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default News;
