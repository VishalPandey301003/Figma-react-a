import React from 'react';
import AboutMe from './AboutMe';
import Galary from './Galary';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="left-empty"></div>
      <div className="right-widgets">
        <AboutMe />
        <Galary />
      </div>
    </div>
  );
}

export default App;


