import React from 'react';
import styled from 'styled-components';

import { color } from './variables';

const Button = styled.a`
  display: inline-block;
  padding: 1.2em 2em;
  color: ${color.white};
  background-color: ${color.brand};
  border-radius: 10em;
`;

export default ({ text, onClick }) => (
  <Button onClick={onClick}>
    {text}
  </Button>
);
