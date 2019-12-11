import React, { useState } from 'react';
import styled from 'styled-components';

import GlobalStyle from './components/GlobalStyles';
import NavHeader from './components/NavHeader';
import NotficationBar from './components/NotficationBar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PricingPlans from './components/PricingPlans';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = styled.div``;
const Main = styled.main``;

export default () => {
  const [noficationIsActive, setNotificationIsActive] = useState(false);

  return (
    <App>
      <GlobalStyle />
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
