import React from 'react';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import useMobileView from '../../hooks/useMobileView';

interface INavLinksProps {
  setIsVisible?: (value: boolean) => void;
}

interface INavLinkProps {
  isMobile: boolean;
}

const NavLink = styled(Scroll.Link)<INavLinkProps>`
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
  font-size: ${({ isMobile }) => (isMobile ? '2em' : '1.25em')};

  :hover {
    font-size: ${({ isMobile }) => (isMobile ? '3em' : '2em')};
  }
  &.active {
    font-size: ${({ isMobile }) => (isMobile ? '3em' : '2em')};
  }
`;

const NavLinks = ({ setIsVisible }: INavLinksProps) => {
  const handleClose = () => {
    if (setIsVisible) setIsVisible(false);
  };
  const isMobile = useMobileView();
  const sections = ['aboutMe', 'skills', 'experience', 'myProjects'];
  return (
    <>
      {sections.map((e, k) => {
        return (
          <NavLink
            isMobile={isMobile}
            key={k}
            activeClass="active"
            to={e}
            onClick={handleClose}
            spy
            smooth>
            {e}
          </NavLink>
        );
      })}
    </>
  );
};
export default NavLinks;
