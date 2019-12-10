import React from 'react';
import styled from 'styled-components';

import { color } from './components/variables';
import NavHeader from './components/NavHeader';

const App = styled.div`
  font-size: 16px;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-family: 'Playfair Display', Georgia, serif;
  }

  h1 {
    font-size: 4em;
  }
  
  h2 {
    font-size: 2em;
  }
  
  h3 {
    font-size: 1.5em;
  }

  p {
    color: ${color.grey70};
  }
`;

const Main = styled.main`
  max-width: 75em;
  margin: auto;
  padding: 0 1em;
`;

export default () => (
  <App>
    <NavHeader />
    <Main>
    </Main>
  </App>
);
