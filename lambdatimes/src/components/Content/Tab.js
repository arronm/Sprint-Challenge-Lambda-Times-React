import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const activeTab = `
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`;

const StyledTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  ${ props => props.selectedTab === props.tab ? css`${activeTab}` : '' }
`;

const Tab = props => {
  return (
    <StyledTab
      selectedTab={props.selectedTab}
      tab={props.tab}
      onClick={() => {
         props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </StyledTab>
  );
};

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}

export default Tab;
