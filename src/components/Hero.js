import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { color } from './variables/index';
import heroImg from '../assets/images/hero.png';
import Button from './Button';

const Hero = styled.section`
  min-height: 38em;
  margin-top: 7em;
  text-align: center;
`;

const Copy = styled.div`
  
`;

const Title = styled.h1`
`;

const Description = styled.p`
  margin: 2em 0 3em;
`;

const SignUpButton = styled(Button)`
  margin-top: 3em;
`;

const Image = styled.img`
  max-width: 60em;
  margin-top: 3em;
`;

const ScrollGuide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4em;
  height: 4em;
  margin: 10em auto 0;
  color: ${color.white};
  background-color: ${color.brand};
  border-radius: 10em;
`;

const AccentText = styled.span`
  margin-left: .3em;
  padding-bottom: .5em;
  font-style: italic;
  border-bottom: .1em solid ${color.grey70};
`;

export default () => (
  <Hero>
    <Copy>
      <Title>Delicious Craft Beer</Title>
      <Description>
        Delivered to your doorsteps
        <AccentText>monthly</AccentText>
        .
      </Description>
      <SignUpButton text="Sign up now" />
    </Copy>
    <Image src={heroImg} />

    <ScrollGuide>
     <FontAwesomeIcon icon={faChevronDown} />
    </ScrollGuide>
  </Hero>
);
