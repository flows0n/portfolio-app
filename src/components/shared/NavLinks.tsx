import React from 'react';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';

interface INavLinksProps {
  setIsVisible?: (value: boolean) => void;
}

const NavLink = styled(Scroll.Link)`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: min-content;
  font-weight: 500;
  transition: all ease-in-out 0.2s;
  font-size: 1.25em;

  :hover {
    font-size: 2em;
  }
  &.active {
    font-size: 1.75em;
  }
`;

const NavLinks = ({ setIsVisible }: INavLinksProps) => {
  const handleClose = () => {
    if (setIsVisible) setIsVisible(false);
  };
  const sections = ['aboutMe', 'experience', 'myProjects'];
  return (
    <>
      {sections.map((e, k) => {
        return (
          <NavLink key={k} activeClass="active" to={e} onClick={handleClose} spy smooth>
            {e}
          </NavLink>
        );
      })}
    </>
  );
};
export default NavLinks;
