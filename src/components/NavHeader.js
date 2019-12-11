import React from 'react';
import styled from 'styled-components';

import { scrollToSection } from '../helpers/helpers';
import { color } from './variables';
import Button from './Button';
import logo from '../assets/images/logo.svg';

const NavHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5em;
  background-color: ${color.white};
  border-bottom: 1px solid ${color.grey10};
`;

const Container = styled.div`
  position: relative;
  display: flex;  
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 75em;
  margin: auto;
  padding: 0 1em;
`;

const Nav = styled.nav`
`;

const NavLink = styled.a`
  margin: 0 2em;
  font-weight: 700;
  cursor: pointer;
`;

const Logo = styled.img`
  position: absolute;
  left: 1em;
`;

const GetStartedBtn = styled(Button)`
  position: absolute;
  right: 0;
`;

export default () => (
  <NavHeader>
    <Container>
      <Logo src={logo} />
      <Nav>
        <NavLink>How it works</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Contact</NavLink>
      </Nav>
      <GetStartedBtn className="get-started-btn" text="Get Started" onClick={() => scrollToSection('contact')} small />
    </Container>
  </NavHeader>
);
