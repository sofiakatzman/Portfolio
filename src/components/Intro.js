import React from "react";
import icon from "../assets/SK-ICON.svg";
import flowerbg from "../assets/flower-background.svg";
function Intro() {
  return (
    <div>
      <img
        src={flowerbg}
        alt="Flower Holding Shape"
        className="background-flower"
      />
      <h1 className="hero">Sofia Katzman</h1>
      <img
        src={icon}
        alt="SK Icon - Flower Character Waving"
        className="SK-icon"
      />
      <h2>Designer & Developer</h2>
      <p>
        At the crossroads of creativity and technology, I'm dedicated to
        continuously learning and delivering top solutions for my clients and
        colleagues.
      </p>
    </div>
  );
}

export default Intro;
