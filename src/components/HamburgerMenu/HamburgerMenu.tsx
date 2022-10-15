import React from 'react';
import styled from 'styled-components';

export interface IHamburgerMenuProps {
  isVisible: boolean;
  children?: React.ReactNode;
}

interface IStyledContainerProps {
  isVisible: boolean;
}

const Container = styled.div<IStyledContainerProps>`
  touch-action: none;
  box-sizing: border-box;
  position: fixed;
  height: 100%;
  width: 100vw;
  top: 0;
  right: 0;
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(100%)')};
  background-color: ${({ theme }) => theme.body}50;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  transition: all ease-in-out 0.2s;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  z-index: 99;
`;

const HamburgerMenu = ({ isVisible, children }: IHamburgerMenuProps) => {
  return <Container isVisible={isVisible}>{children}</Container>;
};

export default HamburgerMenu;
