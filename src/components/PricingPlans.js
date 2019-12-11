import React from 'react';
import styled from 'styled-components';

import pricingPlanData from '../data/pricingPlanData';
import { color } from './variables';
import MaxWidth from './MaxWidth';
import PricingCard from './PricingCard';

const Content = styled(MaxWidth)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 1em;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 2em;
`;

const Plans = styled.div`
  display: flex;
  flex-direction: column;
`;

const PricingPlans = styled.div`
  margin: 5em 0;
  background-color: ${color.brandLight};

  @media (min-width: 43em) {
    ${Plans} {
      flex-direction: row;
    }
  }
`;

export default () => (
  <PricingPlans id="pricing-plans">
    <Content>
      <Title>Time to choose your pricing plan.</Title>

      <Plans>
        {pricingPlanData.map((plan) => {
          const { title, price, specs } = plan;

          return (
            <PricingCard
              key={title}
              title={title}
              price={price}
              specs={specs}
            />
          );
        })}
      </Plans>
    </Content>
  </PricingPlans>
);
