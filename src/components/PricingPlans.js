import React from 'react';
import styled from 'styled-components';

import { color } from './variables';
import MaxWidth from './MaxWidth';
import PricingCard from './PricingCard';

const PricingPlans = styled.div`
  height: 50vh;
  margin: 5em 0;
  background-color: ${color.brandLight};
`;

const Content = styled(MaxWidth)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 0;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 2em;
`;

const Plans = styled.div`
  display: flex;
`;

export default () => (
  <PricingPlans>
    <Content>
      <Title>Time to choose your pricing plan.</Title>

      <Plans>
        <PricingCard />
        <PricingCard />
      </Plans>
    </Content>
  </PricingPlans>
);
