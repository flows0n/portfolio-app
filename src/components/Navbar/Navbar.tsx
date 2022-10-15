import React, { useState } from 'react';
import { Nav, NavCoontainer } from './Elements.styled';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { Squash as Hamburger } from 'hamburger-react';
import ThemeToggler, { IThemeTogglerProps } from '../shared/ThemeToggler';
import useMobileView from '../../hooks/useMobileView';
import NavLinks from '../shared/NavLinks';
import SocialLinks from '../shared/SocialLinks';

const Navbar = ({ toggleTheme }: IThemeTogglerProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  const isMobile = useMobileView();
  return (
    <Nav>
      {!isMobile ? (
        <>
          <ThemeToggler toggleTheme={toggleTheme} />
          <NavCoontainer>
            <NavLinks />
          </NavCoontainer>
        </>
      ) : (
        <>
          <div style={{ zIndex: '100' }}>
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
          <HamburgerMenu isVisible={isMenuVisible}>
            <NavLinks setIsVisible={setIsMenuVisible} />
            <ThemeToggler toggleTheme={toggleTheme} />
          </HamburgerMenu>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
