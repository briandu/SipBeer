import React from 'react';
import styled from 'styled-components';

import PlanSpecs from './PlanSpecs';
import { color } from './variables';

const Title = styled.h3``;

const Image = styled.img`
  margin: 1.5em 0;
`;

const Price = styled.h2``;

const PricingCard = styled.div`
  max-width: 18em;
  margin-bottom: 2em;
  padding: 3em 1.5em;
  background-color: ${color.white};
  border-radius: .5em;

  ${Price} {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
  }

  @media (min-width: 43em) {
    margin: 0 1.5em 2em;
  }
`;

const PerMonth = styled.p`
  margin-bottom: 4em;
  font-size: .8em;
`;

export default ({
  title, imgURL, price, specs,
}) => (
  <PricingCard>
    <Title>{title}</Title>
    <Image src={imgURL} alt="Pricing plan image" />
    <Price>{price}</Price>
    <PerMonth>per month</PerMonth>

    <PlanSpecs specs={specs} />
  </PricingCard>
);
