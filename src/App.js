import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/Pages/LoadingScreen";
import LandingPage from "./components/Pages/LandingPage";
import "./App.css";
import Navigation from "../src/components/Organisms/Navigation.js"


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Router>
        <Navigation />
        {loading ? (
          <LoadingScreen /> 
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
