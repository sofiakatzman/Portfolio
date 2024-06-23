import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Footer from "./components/Footer";
import Signoff from "./components/Signoff";
import MyStory from "./components/MyStory";
import LoadingScreen from "./components/LoadingScreen"; // Import the LoadingScreen component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with actual data fetching logic)
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulating data loading)
    }, 2000);
  }, []);

  return (
    <div>
      <Router>
        {loading ? (
          <LoadingScreen /> // Render loading screen while loading is true
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<MyStory />} />
          </Routes>
        )}
        <Signoff />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
