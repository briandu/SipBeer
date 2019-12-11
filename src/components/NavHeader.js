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
  position: relative;
  margin: 0 1.5em;
  padding: .5em;
  font-weight: 700;
  cursor: pointer;

  ::before {
    position: absolute;
    top: 3.5em;
    right: 0;
    left: 0;
    display: block;
    width: 100%;
    height: .2em;
    background-color: ${color.black};
    transform: scaleX(0);
    transition: .2s ease;
    content: '';
  }
  
  :hover {
    ::before {
      transform: scaleX(1);
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  left: .7em;
  padding: .3em;
  cursor: pointer;
`;

const GetStartedBtn = styled(Button)`
  position: absolute;
  right: 1em;
`;

export default () => (
  <NavHeader>
    <Container>
      <Logo src={logo} onClick={() => scrollToSection('hero')} />
      <Nav>
        <NavLink onClick={() => scrollToSection('how-it-works')}>How it works</NavLink>
        <NavLink onClick={() => scrollToSection('pricing-plans')}>Pricing</NavLink>
        <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
      </Nav>
      <GetStartedBtn className="get-started-btn" text="Get Started" onClick={() => scrollToSection('contact')} small />
    </Container>
  </NavHeader>
);
