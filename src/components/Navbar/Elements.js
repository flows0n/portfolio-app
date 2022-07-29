import styled from 'styled-components';
import * as Scroll from 'react-scroll';

export const Nav = styled.nav`
  position: fixed;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 64px;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  padding: 0px 20px;
  transition: all linear;
  @media screen and (max-width: 720px) {
    height: 48px;
  }
`;
export const NavLogo = styled.div``;
export const NavCoontainer = styled.div`
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
export const NavLink = styled(Scroll.Link)``;
