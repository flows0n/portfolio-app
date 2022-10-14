import React from 'react';
import Navbar from './components/Navbar/Navbar';
import TitleSection from './components/Sections/TitleSection/TitleSection';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import AboutMeSection from './components/Sections/AboutMeSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import useTheme from './hooks/useTheme';
import { darkTheme, lightTheme } from './theme/Themes';
import MyProjectsSection from './components/Sections/MyProjectsSection';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} />
        <TitleSection />
        <AboutMeSection />
        <ExperienceSection />
        <MyProjectsSection />
      </>
    </ThemeProvider>
  );
}

export default App;
