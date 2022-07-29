import React from 'react';
import { Nav, NavCoontainer, NavLogo } from './Elements';
import * as Scroll from 'react-scroll';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <Nav>
      <NavLogo></NavLogo>
      <NavCoontainer>
        <Scroll.Link activeClass="active" to="test1" smooth>
          Link 1
        </Scroll.Link>
        <Scroll.Link activeClass="active" to="test2" smooth>
          Link 2
        </Scroll.Link>
        <Scroll.Link activeClass="active" to="test3" smooth>
          Link 3
        </Scroll.Link>
        <Scroll.Link activeClass="active" to="test4" smooth>
          Link 4
        </Scroll.Link>
      </NavCoontainer>
      <FiMenu size="2em" />
    </Nav>
  );
};

export default Navbar;
