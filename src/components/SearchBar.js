import React, { Component } from 'react';

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

  addTab = () => "stupid";

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

export default SearchBar;
