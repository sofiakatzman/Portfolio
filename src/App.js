import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Layout/Footer/Footer"
import Header from "./components/Layout/Header/Header"
import Home from "./components/Pages/Home"
import Projects from "./components/Pages/Projects"
import ContactMe from './components/Pages/ContactMe'


function App() {
  return (
    <div>
      <Router>
        <Header />        
        <Routes>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/" element={<Home />} /> 
        </Routes>     
        <Footer />
      </Router>
    </div>
  );
}

export default App;