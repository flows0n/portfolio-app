import React, { useState } from 'react';
import { Nav, NavCoontainer, NavLink } from './Elements.styled';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { Squash as Hamburger } from 'hamburger-react';
import * as Scroll from 'react-scroll';
import ThemeToggler, { IThemeTogglerProps } from '../shared/ThemeToggler';
import useMobileView from '../../hooks/useMobileView';

const Navbar = ({ toggleTheme }: IThemeTogglerProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const isMobile = useMobileView();
  return (
    <Nav>
      {!isMobile ? (
        <>
          <ThemeToggler toggleTheme={toggleTheme} />

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
          <Scroll.Link
            to="title"
            smooth
            style={{
              display: 'block',
              width: 'max-content',
              padding: 'auto 0',
              fontSize: '1.25em',
              fontWeight: '600',
              textAlign: 'center'
            }}>
            Bartosz Maliszewski
          </Scroll.Link>
        </>
      ) : (
        <>
          <div style={{ zIndex: '2' }}>
            <Hamburger
              direction="left"
              toggle={setIsMenuVisible}
              toggled={isMenuVisible}
              easing="ease-in-out"
              duration={0.2}
              size={32}
              rounded
            />
          </div>
          <HamburgerMenu isVisible={isMenuVisible} setIsVisible={setIsMenuVisible}>
            <ThemeToggler toggleTheme={toggleTheme} />
          </HamburgerMenu>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
