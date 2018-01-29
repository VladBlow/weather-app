import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from 'features/Header';
import { Board } from 'features/Board';

const MainWrap = styled.main`
  padding: 30px;
`;

const Cart = styled.article`
  width: 100px;
  height: 100px;
  padding: 20px;
  background: transparent;
  border-radius: 5px;
  box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.5);
`;

export class App extends Component {
  componentDidMount() {
    const cities = localStorage.getItem('cities');

    // If we have cities in localStorage -> fetch data for this cities
    if (cities) {
      this.props.getWeatherByIds(JSON.parse(cities));
    }

    window.addEventListener('beforeunload', this.handleUnload);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleUnload);
  }

  handleUnload = () => {
    // If we have cities in Redux -> save to localStorage
    if (this.props.citiesIds) {
      localStorage.setItem('cities', JSON.stringify(this.props.citiesIds));
    }
  };

  render() {
    return (
      <MainWrap>
        <Header />
        <Board />
      </MainWrap>
    );
  }
}
