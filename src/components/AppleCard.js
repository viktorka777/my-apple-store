import React from 'react';
import './AppleCard.css';

const AppleCard = ({ apple }) => {
  return (
    <div className="apple-card">
      <img src={apple.image} alt={apple.name} />
      <h3>{apple.name}</h3>
      <p>{apple.description}</p>
      <p>${apple.price}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default AppleCard;
