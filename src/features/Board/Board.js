import React from 'react';
import styled from 'styled-components';

const Wrap = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  min-height: 80vh;
  margin-top: 40px;
  align-items: center;
`;

const Delete = styled.span`
  position: absolute;
  display: none;
  top: 8px;
  right: 10px;
  font-size: 16px;
  color: black;
  cursor: pointer;
`;

const Cart = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 250px;
  min-height: 250px;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 30px;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.5);

  :hover {
    ${Delete} {
      display: block;
    }
  }
`;

const Name = styled.h1`
  font-size: 20px;
  text-align: center;
`;

const Weather = styled.p`
  font-size: 16px;
  text-transform: capitalize;
  text-align: center;
`;

const Temp = styled.h2`
  font-size: 28px;
  text-align: center;
`;

export const Board = ({ cities, deleteWeatherById }) => {
  if (!cities) return null;

  return (
    <Wrap>
      {cities.map((city, i) => (
        <Cart key={i}>
          <Name>{city.name}</Name>
          <Weather>{city.weather[0].description}</Weather>
          <Temp>{Math.round(city.main.temp)} &#176;C</Temp>
          <Delete onClick={() => deleteWeatherById(city.id)}>╳</Delete>
        </Cart>
      ))}
    </Wrap>
  );
};
