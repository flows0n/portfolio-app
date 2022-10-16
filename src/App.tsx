import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import AboutMeSection from './components/Sections/AboutMeSection';
import ExperienceSection from './components/Sections/ExperienceSection';
import useTheme from './hooks/useTheme';
import { darkTheme, lightTheme } from './theme/Themes';
import MyProjectsSection from './components/Sections/MyProjectsSection';
import SkillsSection from './components/Sections/SkillsSection';
import useMobileView from './hooks/useMobileView';
import Footer from './components/Footer/Footer';

function App() {
  const { theme, toggleTheme } = useTheme();
  const isMobile = useMobileView();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <Navbar toggleTheme={toggleTheme} />
        <AboutMeSection />
        <SkillsSection />
        <ExperienceSection />
        <MyProjectsSection />
        {!isMobile && <Footer />}
      </>
    </ThemeProvider>
  );
}

export default App;
