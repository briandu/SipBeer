import React from 'react';
import styled from 'styled-components';

const Title = styled.h4`
`;

const Description = styled.p`
  margin-top: 1.5em;
`;

const Step = styled.div`
  max-width: 20em;

  ${Title} {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
  }
`;

export default ({ title, description }) => (
  <Step>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Step>
);
