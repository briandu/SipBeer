import React from 'react';
import styled from 'styled-components';

import imgURL from '../assets/images/select-package.png';

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

const Image = styled.img`
  margin-bottom: 2em;
`;

export default ({title, description }) => (
  <Step>
    <Image src={imgURL} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Step>
);
