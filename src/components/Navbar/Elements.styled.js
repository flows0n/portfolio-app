import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { COLORS } from '../../theme/Colors';

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: ${COLORS.black};
  width: 100vw;
  box-sizing: border-box;
  color: ${COLORS.blueLight};
  padding: 0px 20px;
  transition: all linear;
  @media screen and (max-width: 720px) {
    height: 48px;
    justify-content: end;
  }
`;
export const HamburgerMenu = styled.div`
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
  }
`;
export const NavLink = styled(Scroll.Link)`
  cursor: pointer;
  color: ${COLORS.blueLight};
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
    border-bottom: 2px solid ${COLORS.blueLight};
  }
`;
