import React from 'react';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';

interface INavLinksProps {
  setIsVisible?: (value: boolean) => void;
}

const NavLink = styled(Scroll.Link)`
  cursor: pointer;
  position: relative;

  padding-bottom: 10px;
  margin: 16px 32px;

  width: max-content;
  height: min-content;

  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.secondary};
    transform-origin: bottom right;
    transition: transform 0.2s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  & span {
    transition: all 0.2s ease-in-out;
  }
  & span:nth-child(1) {
    color: ${({ theme }) => theme.accent};
  }

  & span:nth-child(2) {
    font-size: 1.5em;
  }
  &.active {
    & span:nth-child(1) {
      font-size: 1.25em;
    }

    & span:nth-child(2) {
      font-size: 2.125em;
    }
  }
`;

const NavLinks = ({ setIsVisible }: INavLinksProps) => {
  const handleClose = () => {
    if (setIsVisible) setIsVisible(false);
  };
  const sections = ['aboutMe', 'skills', 'experience'];
  return (
    <>
      {sections.map((e, k) => {
        return (
          <NavLink key={k} activeClass="active" to={e} onClick={handleClose} spy smooth>
            <span>{`//0${k + 1}`}</span>
            <span>{e}</span>
          </NavLink>
        );
      })}
    </>
  );
};
export default NavLinks;
