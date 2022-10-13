import React from 'react';
import styled from 'styled-components';
import { NavLink } from '../Navbar/Elements.styled';

interface IHamburgerMenuProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
}

interface IStyledContainerProps {
  isVisible: boolean;
}

const StyledContainer = styled.div<IStyledContainerProps>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(100%)')};
  background-color: rgba(0, 0, 0, 0.8);
  transition: ease-in-out 300ms;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const HamburgerMenu = ({ isVisible, setIsVisible }: IHamburgerMenuProps) => {
  const handleClick = () => {
    setIsVisible(false);
  };
  return (
    <StyledContainer isVisible={isVisible}>
      <NavLink activeClass="active" to="title" onClick={handleClick} spy smooth>
        About Me
      </NavLink>
      <NavLink activeClass="active" to="test2" onClick={handleClick} spy smooth>
        Experience
      </NavLink>
      <NavLink activeClass="active" to="test3" onClick={handleClick} spy smooth>
        My projects
      </NavLink>
      <NavLink activeClass="active" to="test4" onClick={handleClick} spy smooth>
        Skills
      </NavLink>
    </StyledContainer>
  );
};

export default HamburgerMenu;
