import React, { useEffect, useState } from 'react';
import { Nav, NavCoontainer, NavLink, HamburgerButton } from './Elements.styled';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Hamburger from 'hamburger-react';
import * as Scroll from 'react-scroll';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  return (
    <Nav>
      <Scroll.Link
        to="title"
        smooth
        style={{
          display: 'block',
          height: 'inherit',
          width: 'max-content',
          padding: 'auto 0'
        }}>
        Bartosz Maliszewski
      </Scroll.Link>
      <NavCoontainer>
        <NavLink activeClass="active" to="aboutMe" spy smooth>
          About Me
        </NavLink>
        <NavLink activeClass="active" to="experience" spy smooth>
          Experience
        </NavLink>
        <NavLink activeClass="active" to="myProjects" spy smooth>
          My projects
        </NavLink>
        <NavLink activeClass="active" to="test4" spy smooth>
          Skills
        </NavLink>
      </NavCoontainer>
      <HamburgerButton>
        <Hamburger
          direction="left"
          toggle={setIsMenuVisible}
          toggled={isMenuVisible}
          easing="ease-in-out"
          size={32}
        />
      </HamburgerButton>
      <HamburgerMenu isVisible={isMenuVisible} setIsVisible={setIsMenuVisible} />
    </Nav>
  );
};

export default Navbar;
