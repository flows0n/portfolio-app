import React, { useState } from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import { Squash as Hamburger } from 'hamburger-react';
import ThemeToggler, { IThemeTogglerProps } from '../shared/ThemeToggler';
import useMobileView from '../../hooks/useMobileView';
import NavLinks from '../shared/NavLinks';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  height: min-content;
  width: 100vw;
  box-sizing: border-box;
  padding: 0px 20px;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const NavCoontainer = styled.div`
  display: flex;
  align-items: center;
  height: inherit;
  width: 100%;
`;

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
          <div style={{ zIndex: '3' }}>
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
            {isMobile && <Footer />}
          </HamburgerMenu>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
