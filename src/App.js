import React, { useState } from 'react';
import styled from 'styled-components';

import { color, breakpoint } from './components/variables';
import NavHeader from './components/NavHeader';
import NotficationBar from './components/NotficationBar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PricingPlans from './components/PricingPlans';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = styled.div`
  font-size: 16px;
  font-family: 'Source Sans Pro', Helvetica, sans-serif;

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

const Main = styled.main`
`;

export default () => {
  const [noficationIsActive, setNotificationIsActive] = useState(false);

  return (
    <App>
      <NotficationBar
        noficationIsActive={noficationIsActive}
      />

      <NavHeader />
      <Main>
        <Hero />
        <HowItWorks />
        <PricingPlans />
        <Contact
          noficationIsActive={noficationIsActive}
          setNotificationIsActive={setNotificationIsActive}
        />
      </Main>
      <Footer />
    </App>
  );
};
