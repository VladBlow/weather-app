import React from 'react';

export const Board = ({ cities }) => {
  if (!cities) return null;

  return (
    <div>
      {cities.map((city, i) => (
        <div>
          {city.name}
          {city.main.temp}
        </div>
      ))}
    </div>
  );
};
