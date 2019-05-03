import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '',
    }
  }

  selectTabHandler = (tab) => {
    console.log(tab);
    this.setState({
      ...this.state,
      selectedTab: tab,
    });
  }

  render() {
    return (
      <div className="tabs">
        <div className="topics">
          <span className="title">TRENDING TOPICS:</span>
          {
            this.props.tabs.map(tab => (
              <Tab
                tab={tab}
                selectTabHandler={this.selectTabHandler}
                selectedTab={this.state.selectedTab}
              />
            ))
          }
        </div>
      </div>
    )
  }
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
}

export default Tabs;
