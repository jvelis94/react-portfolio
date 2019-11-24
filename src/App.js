import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './components/Top';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects'
import Sidebar from './components/Sidebar';


import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Top />
      <AboutMe />
      <Experience />
      <Projects />
      <Sidebar />
    </div>
  );
}

export default App;
