import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {
        props.cards.map(card => <Card {...card} />)
      }
    </div>
  )
}

// TODO: Update our object shape here later
Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
}

export default Cards;