import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Layout/Home'
import './App.css';

function App() {

  return (
    <div>
      <img class="hero" src="https://www.sofiakatzman.com/static/media/bikeriding.cb53f374965a1756e6d7.gif" alt="hero"/>
      <div class="heading"><h1>Sofia Katzman</h1></div>
      <div class="navdiv">
      <div class="navigation"><h2>Designer and Developer</h2></div>
        <div class="curtain">
              <div class="links">
                  <div class="link">Link 1</div>
                  <div class="link">Link 2</div>
                  <div class="link">Link</div>
              </div>
          </div>
        </div>
      <div class="blurb">
        <p>Driven by passion, I've evolved from an operations manager to a designer, and now to a software engineer.</p>
        <p>As a production designer at Scholastic, I craft design systems, build emails, and develop operational tools, while also working in DevOps and AI marketing part-time. </p>
        <p>At the crossroads of creativity and technology, I'm dedicated to continuously learning and delivering top solutions for my clients.</p>
      </div>

      
      <Router>
   
        <Routes>
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/project/:name" element={<ProjectDetail />} />
          <Route path="/contactme" element={<ContactMe />} /> */}
          <Route path="/" element={<Home />} /> 
        </Routes>     

      </Router>
    </div>
  )
}

export default App
