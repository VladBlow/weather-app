import React from 'react';
import styled from 'styled-components';
import { Header } from 'features/Header';

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

export const App = () => (
  <MainWrap>
    <Header />
  </MainWrap>
);
