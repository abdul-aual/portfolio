import './App.css';
import Header from './allFile/header/Header';
import NavLinks from './allFile/nav/NavLinks';
import React, { useEffect, useRef } from 'react';
import { initVantaBackground, destroyVantaBackground } from './background';
import Academic from './allFile/academic/Academic';
import Projects from './allFile/projects/Projects';
import Contacts from './allFile/contacts/Contacts';
import Bio from './allFile/bio/Bio';
import Showoff from './allFile/showoff/Showoff';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    initVantaBackground('.container');
    return () => destroyVantaBackground();
  }, []);

  return (
    <Router>
      <div className="container" ref={containerRef}>
        <Header />
        <NavLinks />

        <Routes>
          <Route path='/' element={<Bio />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/showoff' element={<Showoff />} />
          <Route path='/academic' element={<Academic />} />
          <Route path='/contact' element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
