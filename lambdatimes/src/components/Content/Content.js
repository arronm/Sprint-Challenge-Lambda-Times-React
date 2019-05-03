import React, { Component } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

const StyledContent = styled.div`
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        tabs: tabData,
        cards: cardData,
      });
    }, 350);
  }

  changeSelected = tab => {
    this.setState({
      ...this.state,
      selected: tab,
    });
  };

  filterCards = () => {
    return this.state.selected === 'all'
           ? this.state.cards
           : this.state.cards.filter(card => card.tab === this.state.selected);
  };

  render() {
    console.log(this.state)
    return (
      <StyledContent>
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <Cards cards={this.filterCards()} />
      </StyledContent>
    );
  }
}
