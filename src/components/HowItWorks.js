import React from 'react';
import styled from 'styled-components';

import { breakpoint } from './variables';
import stepsData from '../data/stepsData';
import Step from './Step';
import MaxWidth from './MaxWidth';

const Title = styled.h2`
  margin-bottom: 3em;
`;

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 25em;
`;

const HowItWorks = styled(MaxWidth)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5em auto;
  text-align: center;

  @media ${breakpoint.large} {
    margin: 10em auto;

    ${Steps} {
      flex-direction: row;
      max-width: 100%;
    }
  }
`;

export default () => (
  <HowItWorks id="how-it-works">
    <Title>Look. Here's how it works.</Title>

    <Steps>
      {stepsData.map((step) => {
        const { imgURL, title, description } = step;

        return (
          <Step
            key={title}
            imgURL={imgURL}
            title={title}
            description={description}
          />
        );
      })}
    </Steps>
  </HowItWorks>
);
