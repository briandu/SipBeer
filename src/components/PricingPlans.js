import React from 'react';
import styled from 'styled-components';

import { color } from './variables';
import MaxWidth from './MaxWidth';

const PricingPlans = styled.div`
  height: 50vh;
  margin: 5em 0;
  background-color: ${color.brandLight};
`;

const Content = styled(MaxWidth)`
  padding: 5em 0;
  text-align: center;
`;

const Title = styled.h2`
`;

export default () => (
  <PricingPlans>
    <Content>
      <Title>Time to choose your pricing plan.</Title>
    </Content>
  </PricingPlans>
);
