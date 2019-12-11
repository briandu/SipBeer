import React from 'react';
import styled from 'styled-components';

import { scrollToSection } from '../helpers/helpers';
import { color } from './variables';
import BeerIcon from '../assets/images/beer-icon.svg';
import PriceIcon from '../assets/images/price-icon.svg';
import PhoneIcon from '../assets/images/phone-icon.svg';
import Button from './Button';
import logo from '../assets/images/logo.svg';

const MobileLink = styled.img``;

const DesktopLink = styled.span`
  display: none;
`;

const Container = styled.div`
  position: relative;
  display: flex;  
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  max-width: 75em;
  margin: auto;
  padding: 0 1em;
`;

const Nav = styled.nav`
`;

const NavLink = styled.a`
  position: relative;
  display: inline-block;
  margin: 0 .75em;
  font-weight: 700;
  cursor: pointer;

  ::before {
    position: absolute;
    top: 3.2em;
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
  display: none;
`;

const NavHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 5em;
  background-color: ${color.white};
  border-bottom: 1px solid ${color.grey10};

  @media (min-width: 30em) {
    ${MobileLink} {
      display: none;
    }

    ${DesktopLink} {
      display: inline-block;
    }

    ${NavLink} {
      margin: 0 1.5em;

      ::before {
        top: 2.8em;
      }
    }
  }
  
  @media (min-width: 48em) {
    ${Container} {
      justify-content: center;
    }

    ${GetStartedBtn} {
      display: inline-block;
    }
  }
`;

export default () => (
  <NavHeader>
    <Container>
      <Logo src={logo} onClick={() => scrollToSection('hero')} />
      <Nav>
        <NavLink onClick={() => scrollToSection('how-it-works')}>
          <MobileLink src={BeerIcon} />
          <DesktopLink>
            How it works
          </DesktopLink>
        </NavLink>
        <NavLink onClick={() => scrollToSection('pricing-plans')}>
          <MobileLink src={PriceIcon} />
          <DesktopLink>
            Pricing
          </DesktopLink>
        </NavLink>
        <NavLink onClick={() => scrollToSection('contact')}>
          <MobileLink src={PhoneIcon} />
          <DesktopLink>
            Contact
          </DesktopLink>
        </NavLink>
      </Nav>
      <GetStartedBtn className="get-started-btn" text="Get Started" onClick={() => scrollToSection('contact')} small />
    </Container>
  </NavHeader>
);
