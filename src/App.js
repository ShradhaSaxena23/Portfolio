import React from 'react';
import Navbar from './Components/Navbar';

//import './App.css';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import About from './Components/About';

import Skills from './Components/Skills';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    
    <div className="App">
      
      
      <Routes>
      <Route path="/"element={<Home />}/>
      <Route path="/Home"element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Skills" element={<Skills />}/>
          <Route path="/Projects" element={<Projects />}/>
          <Route path="/Contacts" element={<Contacts />}/>
         
          </Routes>
          </div>
        </Router>
        </>
  );
}

export default App;
