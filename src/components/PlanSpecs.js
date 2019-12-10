import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { color } from './variables';

const List = styled.ul`
  .fa-check {
    margin: .3em 1em 0 0;
    color: ${color.brand};
  }
`;

const Item = styled.li`
  display: flex;
  margin: .75em 0;
  line-height: 1.5;
  text-align: left;
`;

const ListItem = () => (
  <Item>
    <FontAwesomeIcon icon={faCheck} />
    Up to 2 X 6 - pack of beers from a selection of 10 beers
  </Item>
);

export default () => (
  <List>
    <ListItem>Pick up from your nearest LCBO store</ListItem>
  </List>
);
