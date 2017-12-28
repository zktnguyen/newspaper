import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewsTab extends Component {
  showNews = () => console.log(`showing news for ${this.props.topic}`);

  render() {
    const { topic } = this.props;
    return (
      <div>
          <li className="nav-item">
            <button className="btn btn-link" onClick={this.showNews}>
              {topic.toUpperCase()}
            </button>
          </li>
      </div>
    );
  }
}

NewsTab.propTypes = {
  topic: PropTypes.string.isRequired
};

export default NewsTab;
