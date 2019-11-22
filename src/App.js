import React from 'react';
import Top from './components/Top';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Top />
      <AboutMe />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
