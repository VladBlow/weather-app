import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

export const injectStyles = () => injectGlobal`
  ${normalize()};

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400&subset=cyrillic');

  body {
    background-image: linear-gradient(to right, #5170e6, #8c55ea);
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: normal;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
