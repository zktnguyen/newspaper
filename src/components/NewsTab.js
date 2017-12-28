import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const NewsTab = ({ topic, href }) => (

// );

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

NewsTab.defaultProps = {
  topic: 'New Tab'
};

NewsTab.propTypes = {
  topic: PropTypes.string
};

export default NewsTab;
