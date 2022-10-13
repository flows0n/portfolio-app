import React from 'react';
import * as Scroll from 'react-scroll';
import Navbar from './components/Navbar/Navbar';
import TitleSection from './components/Sections/TitleSection/TitleSection';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './theme/GlobalStyle';
import { useTheme } from './hooks/useTheme';

function App() {
  const { selectedTheme } = useTheme();

  return (
    <ThemeProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar />
      <TitleSection />
      <Scroll.Element name="test2" style={{ height: '100vh', backgroundColor: '#98C1D9' }}>
        test 1
      </Scroll.Element>
      <Scroll.Element name="test3" style={{ height: '100vh', backgroundColor: '#E0FBFC' }}>
        test 1
      </Scroll.Element>
      <Scroll.Element name="test4" style={{ height: '100vh', backgroundColor: '#98C1D9' }}>
        test 1
      </Scroll.Element>
    </ThemeProvider>
  );
}

export default App;
