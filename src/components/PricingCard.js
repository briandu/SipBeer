import React from 'react';
import styled from 'styled-components';

import PlanSpecs from './PlanSpecs';

import { color } from './variables';

const Title = styled.h3`
  
`;

const Price = styled.h2`
  margin-top: 5em;
`;

const PricingCard = styled.div`
  width: 100%;
  max-width: 18em;
  margin: 0 1.5em;
  padding: 3em 1.5em;
  background-color: ${color.white};
  border-radius: .5em;

  ${Price} {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
  }
`;

const PerMonth = styled.p`
  margin-bottom: 4em;
  font-size: .8em;
`;

export default () => (
  <PricingCard>
    <Title>Casual Drinker</Title>
    <Price>$19.99</Price>
    <PerMonth>per month</PerMonth>

    <PlanSpecs />
  </PricingCard>
);
