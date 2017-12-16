import React from 'react';
import PropTypes from 'prop-types';

const NewsTab = ({ topic }) => (
  <div>{topic}</div>
);

NewsTab.defaultProps = {
  topic: "New Tab"
};

NewsTab.propTypes = {
  topic: PropTypes.string
};

export default NewsTab;