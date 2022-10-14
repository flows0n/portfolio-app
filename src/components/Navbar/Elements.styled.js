import styled from 'styled-components';
import * as Scroll from 'react-scroll';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  height: 64px;
  display: flex;
  width: 100vw;
  box-sizing: border-box;
  padding: 0px 20px;
  transition: all linear;
  background-color: ${({ theme }) => theme.body};
  @media screen and (max-width: 720px) {
    height: 48px;
    justify-content: end;
  }
`;
export const HamburgerButton = styled.div`
  z-index: 2;
  transition: all linear 300ms;
  display: none;

  @media screen and (max-width: 720px) {
    display: block;
  }
`;
export const NavCoontainer = styled.div`
  display: none;

  @media screen and (min-width: 720px) {
    position: relative;
    display: flex;
    height: inherit;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
export const NavLink = styled(Scroll.Link)`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  width: 120px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;

  transition: all 200ms linear;

  :hover {
    font-size: 1.25em;
  }
  &.active {
    font-size: 1.175em;
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
`;
