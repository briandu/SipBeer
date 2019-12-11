import { createGlobalStyle } from 'styled-components';

import { color, breakpoint } from './variables';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: 'Playfair Display', Georgia, serif;
  }

  h1 {
    font-size: 3em;
  }
  h2 {
    font-size: 1.8em;
  }
  h3 {
    font-size: 1.5em;
  }
  h4 {
    font-size: 1.2em;
  }
  h5 {
    font-size: 1em;
  }

  p {
    color: ${color.grey70};
    font-size: .875em;
    line-height: 1.5em;
  }

  input {
    background: 0;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
  }

  @media ${breakpoint.large} { /* tablet size 768px */
    h1 {
      font-size: 4em;
    }
    h2 {
      font-size: 2em;
    }
    h3 {
      font-size: 1.5em;
    }
    h4 {
      font-size: 1.25em;
    }

    p {
      font-size: 1em;
    }
  }
`;

export default GlobalStyle;
