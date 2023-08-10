import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header/Header"
import Home from "./components/Pages/Home"
import Projects from "./components/Pages/Projects"
import ContactMe from './components/Pages/ContactMe'

function App() {
  return (
    <div>
      <Router>
        <Header />

        {/* No need to render Home here */}
        {/* <Home /> */}
        
        <Routes>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/" element={<Home />} /> {/* Use "element" prop here */}
        </Routes>

        
        <Footer />
      </Router>
    </div>
  );
}

export default App;