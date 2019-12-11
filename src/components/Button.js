import React from 'react';
import styled from 'styled-components';

import { color } from './variables';

const Button = styled.a`
  display: inline-block;
  padding: ${props => props.small ? ".8em 1.2em" : "1.2em 2em"};
  color: ${color.white};
  background-color: ${color.brand};
  border-radius: 10em;
  cursor: pointer;
  transition: .2s ease;

  :hover {
    background-color: ${color.brandDark};
  }
`;

export default ({
  className, text, onClick, small,
}) => (
  <Button className={className} onClick={onClick} small={small}>
    {text}
  </Button>
);
