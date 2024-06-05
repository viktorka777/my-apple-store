import React from 'react';
import AppleCard from './AppleCard';

const AppleList = () => {
  const apples = [
    {
      id: 1,
      name: 'Green Apple',
      description: 'A fresh green apple.',
      price: 1.5,
      image: 'https://via.placeholder.com/100',
    },
    {
      id: 2,
      name: 'Red Apple',
      description: 'A juicy red apple.',
      price: 2.0,
      image: 'https://via.placeholder.com/100',
    },
    // Додайте більше яблук за необхідності
  ];

  return (
    <div className="apple-list">
      {apples.map(apple => (
        <AppleCard key={apple.id} apple={apple} />
      ))}
    </div>
  );
};

export default AppleList;
