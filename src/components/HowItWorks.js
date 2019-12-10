import React from 'react';
import styled from 'styled-components';

import Step from './Step';
import MaxWidth from './MaxWidth';

const HowItWorks = styled(MaxWidth)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5em auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 10em;
`;

const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default () => (
  <HowItWorks>
    <Title>Look. Here's how it works.</Title>

    <Steps>
      <Step />
      <Step />
      <Step />
    </Steps>
  </HowItWorks>
);