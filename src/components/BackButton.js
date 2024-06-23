import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg"; // Adjust the path to your arrow.svg file

const BackButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.location.href = "/"; // Navigate to home page
  };

  return (
    <Link
      to="/"
      style={{
        textDecoration: "none",
        display: "inline-block",
        textAlign: "center",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: "relative" }}>
        <img
          src={arrow}
          alt="Back Arrow"
          style={{
            width: "50px",
            height: "50px",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
          }}
          onClick={handleClick}
        />
        <div
          style={{
            fontSize: "14px",
            marginTop: "5px",
            transition: "opacity 0.3s ease-in-out",
            opacity: hovered ? 1 : 0, // Show text when hovered
            pointerEvents: "none", // Ensure text doesn't intercept clicks
            position: "absolute",
            top: "65px", // Adjust vertical position as needed
            left: "50%", // Center horizontally
            transform: "translateX(-50%)", // Center horizontally
          }}
        >
          Home
        </div>
      </div>
    </Link>
  );
};

export default BackButton;
