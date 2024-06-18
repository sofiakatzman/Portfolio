import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import './App.css';

function App() {

  return (
    <div>
      {/* <h1>Sofia Katzman</h1>
      ----------------------------
      <h1>Testing, testing, 1...2...3...</h1>
      <h2>Testing, testing, 1...2...3...</h2>
      <h3>Testing, testing, 1...3...3...</h3>
      <h4>Testing, testing, 1...4...3...</h4>
      <p>Testing, testing, 1...2...3...</p> */}
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
