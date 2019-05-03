import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          props.tabs.map(tab => (
            <Tab
              tab={tab}
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
            />
          ))
        }
      </div>
    </div>
  )
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
}

export default Tabs;
