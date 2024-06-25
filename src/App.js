import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import "./App.css";
import Footer from "./components/Footer";
import Signoff from "./components/Signoff";
import MyStory from "./components/MyStory";
import LoadingScreen from "./components/LoadingScreen"; // Import the LoadingScreen component
import DesignWorks from "./components/DesignWorks";
import DevWorks from "./components/DevWorks";
import DevProject from "./components/DevProject";

function App() {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <>
      <Router>
        {loading ? (
          <LoadingScreen /> // Render loading screen while loading is true
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work/design" element={<DesignWorks />} />
            <Route path="/work/dev" element={<DevWorks />} />
            <Route path="/work/dev/:name" element={<DevProject />} />
            <Route path="/story" element={<MyStory />} />
          </Routes>
        )}
        <Signoff />
        <Footer />
      </Router>
    </>
  );
}

export default App;
