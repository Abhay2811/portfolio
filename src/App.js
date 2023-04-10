import React from 'react';
import './App.css';
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import NavBar from "./components/NavBar.js";
import Resume from "./components/Resume.js";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<About />} path="about"></Route>
          <Route element={<Projects />} path="projects"></Route>
          <Route element={<Resume />} path="resume"></Route>
          <Route element={<Contact />} path="contact"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

