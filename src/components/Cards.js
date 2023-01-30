import React from 'react';
import Card from './Card';
import '../styles/Cards.scss';

function Cards({ items, onClick }) {
  return (
    <div className="Cards">
      {items.map((item) => (
        <Card
          key={item.name}
          name={item.name}
          image={item.image}
          onClick={() => onClick(item.name)}
        />
      ))}
    </div>
  );
}

export default Cards;
