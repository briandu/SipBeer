import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

import { scrollToSection } from '../helpers/helpers';
import { color } from './variables';
import MaxWidth from './MaxWidth';
import logo from '../assets/images/logo.svg';

const Footer = styled.footer``;

const Content = styled(MaxWidth)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 1em;
  border-top: 1px solid ${color.grey10};
`;

const Logo = styled.img`
  cursor: pointer;
`;

const SocialMediaIcons = styled.div`
  .svg-inline--fa {
    margin-left: 1em;
    color: ${color.grey70};
    cursor: pointer;
  }
`;

export default () => (
  <Footer>
    <Content>
      <Logo src={logo} onClick={() => scrollToSection('hero')} />

      <SocialMediaIcons>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebookF} />
      </SocialMediaIcons>
    </Content>
  </Footer>
);
