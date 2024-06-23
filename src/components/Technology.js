import React from "react";

function Technology({ name, icon }) {
  return (
    <div className="technology-card">
      <img src={icon} alt={name} className="technology-icon" />
      <p className="technology-name">{name}</p>
    </div>
  );
}

export default Technology;
