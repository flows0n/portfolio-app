import React, { useEffect, useState } from 'react';
import { Nav, NavCoontainer, NavLink, HamburgerButton } from './Elements.styled';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  return (
    <Nav>
      <NavCoontainer>
        <NavLink activeClass="active" to="title" spy smooth>
          About Me
        </NavLink>
        <NavLink activeClass="active" to="test2" spy smooth>
          Experience
        </NavLink>
        <NavLink activeClass="active" to="test3" spy smooth>
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
