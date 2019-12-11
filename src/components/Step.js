import React from 'react';
import styled from 'styled-components';

// import imgURL from '../assets/images/select-package.png';

const Title = styled.h4`
`;

const Description = styled.p`
  margin-top: 1.5em;
`;

const Image = styled.img`
  max-width: 21.5em;
  margin-bottom: 2em;
`;

const Step = styled.div`
  flex: 1 1 33.3%;
  margin-bottom: 3em;

  ${Title} {
    font-family: 'Source Sans Pro', Helvetica, sans-serif;
  }

  @media (min-width: 48em) {
    margin: 0 1em 3em;
  }
`;

export default ({imgURL, title, description }) => (
  <Step>
    <Image src={imgURL} />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Step>
);
