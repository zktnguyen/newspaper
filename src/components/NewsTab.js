import React from 'react';
import PropTypes from 'prop-types';

const NewsTab = ({ topic, href }) => (
  <li className="nav-item">
    <a className="nav-link" href={href}>
      {topic}
    </a>
  </li>
);

NewsTab.defaultProps = {
  topic: 'New Tab',
  href: '/'
};

NewsTab.propTypes = {
  topic: PropTypes.string,
  href: PropTypes.string
};

export default NewsTab;
