import React from 'react';
import styled from 'styled-components';

export interface IHamburgerMenuProps {
  isVisible: boolean;
  children?: React.ReactNode;
}

interface MenuProps {
  isVisible: boolean;
}

const Menu = styled.div<MenuProps>`
  touch-action: none;
  box-sizing: border-box;
  position: fixed;
  height: 100%;
  width: 100vw;
  top: 0;
  right: 0;
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(100%)')};
  background-color: ${({ theme }) => theme.body}50;
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  transition: all ease-in-out 0.2s;
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: inherit;
  justify-content: space-evenly;
  align-items: center;
`;

const HamburgerMenu = ({ isVisible, children }: IHamburgerMenuProps) => {
  return (
    <Menu isVisible={isVisible}>
      <Container> {children}</Container>
    </Menu>
  );
};

export default HamburgerMenu;
