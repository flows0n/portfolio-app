import React from 'react';
import './App.css';
import * as Scroll from 'react-scroll';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Scroll.Element name="test1" style={{ height: '100vh', backgroundColor: 'red' }}>
        test 1
      </Scroll.Element>
      <Scroll.Element name="test2" style={{ height: '100vh', backgroundColor: 'green' }}>
        test 1
      </Scroll.Element>
      <Scroll.Element name="test3" style={{ height: '100vh', backgroundColor: 'blue' }}>
        test 1
      </Scroll.Element>
      <Scroll.Element name="test4" style={{ height: '100vh', backgroundColor: 'yellow' }}>
        test 1
      </Scroll.Element>
    </div>
  );
}

export default App;
