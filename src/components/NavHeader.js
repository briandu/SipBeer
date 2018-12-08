import React from 'react';
import styled from 'styled-components';

import { color } from './variables';
import logo from '../assets/images/logo.svg';

const NavHeader = styled.header`
  display: flex;
  align-items: center;
  height: 5em;
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
`;

const Logo = styled.img`
  position: absolute;
  left: 1em;
`;

const Button = styled.a`
  position: absolute;
  right: 1em;
  padding: .8em 1.2em;
  color: ${color.white};
  background-color: ${color.brand};
  border-radius: 10em;
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
      <Button>Get Started</Button>
    </Container>
  </NavHeader>
);
