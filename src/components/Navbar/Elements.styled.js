import styled from 'styled-components';

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
  display: flex;
  align-items: center;
  height: inherit;
`;
