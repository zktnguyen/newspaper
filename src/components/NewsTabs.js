import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import NewsTab from './NewsTab';
import NewsList from './NewsList';

class NewsTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: this.props.defaultIndex
    };

    this.onTabClick = this.onTabClick.bind(this);
  };

  onTabClick = (tabIndex) => {
    this.setState({ activeIndex: 
      tabIndex === this.state.activeIndex ? 
        this.props.defaultIndex : tabIndex });
  };

  renderTabs = () => {
    const { children } = this.props;
    return React.Children.map(children, (child, index) => 
      React.cloneElement(child, {
        onClick: this.onTabClick,
        tabIndex: index,
        isActive: index === this.state.activeIndex
      })
    );
    // const { topics } = this.props;
    // const tabs = topics.map((topic, index) => 
    //   (<NewsTab
    //     topic={topic}
    //     key={topic}
    //     tabIndex={index}
    //     onClick={this.onTabClick}
    //     isActive={index === this.state.activeIndex}
    //   />));
    // return tabs;
  }

  renderActiveContent = () => {
    const { children } = this.props;
    const { activeIndex } = this.state;
    if (children[activeIndex]) {
      const query = children[activeIndex].props.topic;
      return <NewsList query={query} />;
    }
    return 'hello';
  }

  render() {
    return (
      <div>
        <ul className="nav nav-pills">
          {this.renderTabs()}
        </ul>
        <div>
          {this.renderActiveContent()}
        </div>
      </div>
    );
  }
}
NewsTabs.defaultProps = {
  defaultIndex: 0
};

NewsTabs.propTypes = {
  defaultIndex: PropTypes.number  
};

export default NewsTabs;