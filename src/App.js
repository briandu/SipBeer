import React from 'react';
import styled from 'styled-components';

import { color } from './components/variables';
import NavHeader from './components/NavHeader';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PricingPlans from './components/PricingPlans';
import Footer from './components/Footer';

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
  
  h4 {
    font-size: 1.25em;
  }
  
  h5 {
    font-size: 1em;
  }

  p {
    color: ${color.grey70};
    line-height: 1.5em;
  }
`;

const Main = styled.main`
`;

export default () => (
  <App>
    <NavHeader />
    <Main>
      <Hero />
      <HowItWorks />
      <PricingPlans />
    </Main>
    <Footer />
  </App>
);
