import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { color } from './variables';
import MaxWidth from './MaxWidth';

const NotificationBar = styled.div`
  position: fixed;
  top: 5em;
  width: 100%;
  background-color: ${color.brandLight};
`;

const Message = styled(MaxWidth)`
  padding: 1.5em 0;
  text-align: center;

  .fa-check-circle {
    margin-right: .5em;
    color: ${color.success};
  }
`;

const AccentText = styled.span`
  margin-right: .2em;
  font-weight: 700;
  text-decoration: underline;
`;

export default () => (
  <NotificationBar>
    <Message>
      <FontAwesomeIcon icon={faCheckCircle} />
      <AccentText>Success!</AccentText>
      A SipBeer Agent will contact you within 24 - 48 hours.
    </Message>
  </NotificationBar>
);
