import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getNews } from '../actions/news';
import NewsItem from './NewsItem';

class NewsList extends Component {
  componentDidMount() {
    if (!this.props.news.length) {
      this.props.getNews(this.props.query);
    }
  }

  render() {
    let newsList;
    const { news, query } = this.props;
    if (news) {
      newsList = news.map(article => 
        <NewsItem 
          key={article.publishedAt}
          photo={article.urlToImage}
          description={article.description}
          title={article.title}
          url={article.url}
          source={article.source.name}
        />
      );
    }
    return (
      <ul name={query}>
        {!!newsList ? newsList : 'Rendering'}
      </ul>
    )
  }
  
};
NewsList.defaultProps = {
  news: [] 
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    photo: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    source: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string
    }),
    date: PropTypes.string
  })),
  query: PropTypes.string.isRequired,
  getNews: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  const { query } = ownProps;
  return {
    news: state.news[query]
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);