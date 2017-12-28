import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews } from '../actions/news';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  }

  onInputChange(query) {
    this.setState({ query });
  }

  addTab = () => this.state.query ? this.props.getNews(this.state.query) 
  : this.setState({ query: '' });

  render() {
    return (
      <div className="home-search container-fluid">
        <div className="home-search col-lg-5 offset-lg-4">
          <h2>Get started. <br/><small>Let us know what topics you want to see.</small></h2>
          <div className="search-bar input-group">
            <input className="form-control" type="text"
              placeholder="Search news topic"
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)} />
            <span className="input-group-btn">
              <button className="btn btn-secondary" type="button" onClick={this.addTab}>Go!</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  getNews: PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNews }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
