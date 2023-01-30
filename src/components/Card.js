import React from 'react';
import '../styles/Card.scss';

function Card({ name, image, onClick }) {
  return (
    <div onClick={onClick} className="Card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
