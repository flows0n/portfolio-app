import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../theme/Themes';

export interface IThemeTogglerProps {
  toggleTheme: () => void;
}

const ToggleContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.text};
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-flow: row nowrap;
  gap: 12px;
  height: fit-content;
  border-radius: 100px;
  position: relative;
`;

const Toggler = styled.div`
  background-color: ${({ theme }) => theme.text};
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 100%;
  top: 2px;
  left: ${({ theme }) => (theme === lightTheme ? '2px' : 'calc(100% - 30px)')};
  z-index: -1;
  transition: all ease-in-out 0.2s;
`;

const SunIcon = styled(FiSun)`
  visibility: ${({ theme }) => (theme === lightTheme ? 'visible' : 'hidden')};
  color: ${({ theme }) => theme.body};
  width: 22px;
  height: 22px;
`;

const MoonIcon = styled(FiMoon)`
  visibility: ${({ theme }) => (theme === darkTheme ? 'visible' : 'hidden')};
  color: ${({ theme }) => theme.body};
  width: 22px;
  height: 22px;
`;

const ThemeToggler = ({ toggleTheme }: IThemeTogglerProps) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      <Toggler />
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

export default ThemeToggler;
