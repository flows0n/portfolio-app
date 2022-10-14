import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../Navbar/Elements.styled';

export interface IHamburgerMenuProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  children?: React.ReactNode;
}

interface IStyledContainerProps {
  isVisible: boolean;
}

const Container = styled.div<IStyledContainerProps>`
  position: fixed;
  height: 100%;
  width: 100vw;
  top: 0;
  right: 0;
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(100%)')};
  background-color: ${({ theme }) => theme.nav}50;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  transition: all ease-in-out 0.2s;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const HamburgerMenu = ({ isVisible, setIsVisible, children }: IHamburgerMenuProps) => {
  const handleClick = () => {
    setIsVisible(false);
  };
  return (
    <Container isVisible={isVisible}>
      <NavLink activeClass="active" to="aboutMe" onClick={handleClick} spy smooth>
        About Me
      </NavLink>
      <NavLink activeClass="active" to="experience" onClick={handleClick} spy smooth>
        Experience
      </NavLink>
      <NavLink activeClass="active" to="myProjects" onClick={handleClick} spy smooth>
        My projects
      </NavLink>
      <NavLink activeClass="active" to="test4" onClick={handleClick} spy smooth>
        Skills
      </NavLink>
      {children}
    </Container>
  );
};

export default HamburgerMenu;
