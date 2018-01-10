import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewsTab extends Component {
  showNews = () => console.log(`showing news for ${this.props.topic}`);

  render() {
    const { topic, isActive, onClick, tabIndex } = this.props;
    return (
      <li className="nav-item">
        <button className={`btn btn-link ${ isActive ? 'active': '' }`}
          onClick={e => {
            e.preventDefault();
            onClick(tabIndex);
        }}>
          {topic.toUpperCase()}
        </button>
      </li>
    );
  }
}

// NewsTab.defaultProps = {
//   isActive: false,
//   tabIndex: 0
// };

NewsTab.propTypes = {
  topic: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  tabIndex: PropTypes.number,
  isActive: PropTypes.bool
};

export default NewsTab;
