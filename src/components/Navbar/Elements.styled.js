import styled from 'styled-components';
import * as Scroll from 'react-scroll';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  height: 64px;
  width: 100vw;
  box-sizing: border-box;
  padding: 0px 20px;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const NavCoontainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  height: inherit;
`;

export const NavLink = styled(Scroll.Link)`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  width: 120px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: min-content;
  width: 400;
  transition: all ease-in-out 0.2s;

  :hover {
    font-size: 1.25em;
  }
  &.active {
    font-size: 1.175em;
    border-bottom: 2px solid ${({ theme }) => theme.text};
  }
`;
