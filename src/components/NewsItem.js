import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ photo, description, 
  title, author, url, source, date }) => (
      <li>
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-lg-3">
            <a target="_blank" href={url}><img src={photo} alt={`depicting ${title}`}/></a>
            </div>
            <div className="col-xs-6 col-lg-9">
              <h1>{title}</h1><h5>from {source}, written by {author}</h5>
              <h5>Published on {date}</h5>
              <p>{description}</p>
              <a target="_blank" href={url}>Read more here</a>
            </div>
          </div>
        </div>
      </li>
  
);

NewsItem.defaultProps = {
  photo: 'http://via.placeholder.com/350x150',
  author: 'Unknown',
  date: 'Unknown date',
  description: 'No description'
}

NewsItem.propTypes = {
  photo: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  url: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  date: PropTypes.string
}

export default NewsItem;