import React from 'react';
import Card from './Card';

function Cards({ items }) {
  return (
    <div className="Cards">
      {items.map((item) => (
        <Card name={item.name} image={item.image} />
      ))}
    </div>
  );
}

export default Cards;
