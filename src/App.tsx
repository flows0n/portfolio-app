import React from 'react';
import * as Scroll from 'react-scroll';
import Navbar from './components/Navbar/Navbar';
import TitleSection from './components/Sections/TitleSection/TitleSection';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { lightTheme, darkTheme } from './theme/Themes';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyle />
        <Navbar />
        <TitleSection />

        <Scroll.Element name="test2" style={{ height: '100vh' }}>
          test 1
        </Scroll.Element>
        <Scroll.Element name="test3" style={{ height: '100vh' }}>
          test 1
        </Scroll.Element>
        <Scroll.Element name="test4" style={{ height: '100vh' }}>
          test 1
        </Scroll.Element>
      </>
    </ThemeProvider>
  );
}

export default App;
