import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';

const StyledTabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TopicsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <StyledTabs>
      <Topics>
        <TopicsTitle>TRENDING TOPICS:</TopicsTitle>
        {
          props.tabs.map(tab => (
            <Tab
              tab={tab}
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
            />
          ))
        }
      </Topics>
    </StyledTabs>
  )
}

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
}

export default Tabs;
