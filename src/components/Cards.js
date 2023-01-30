import React from 'react';
import Card from './Card';
import '../styles/Cards.scss';

function Cards({ items }) {
  return (
    <div className="Cards">
      {items.map((item) => (
        <Card key={item.name} name={item.name} image={item.image} />
      ))}
    </div>
  );
}

export default Cards;
