import React from 'react';
import styled from 'styled-components';

import { color } from './variables/index';

const Hero = styled.section`
  height: 80vh;
  padding-top: 7em;
  text-align: center;
`;

const Title = styled.h1`
`;

const Description = styled.p`
  margin-top: 2em;
`;

const AccentText = styled.span`
  margin-left: .3em;
  padding-bottom: .5em;
  font-style: italic;
  border-bottom: .1em solid ${color.grey70};
`;

export default () => (
  <Hero>
    <Title>Delicious Craft Beer</Title>
    <Description>
      Delivered to your doorsteps
      <AccentText>monthly</AccentText>
      .
    </Description>
  </Hero>
);
