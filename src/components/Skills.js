import React, { useState } from "react";
import Popup from "./Popup";
import skills from "../assets/skills";

function Skills() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleSkillClick = (title) => {
    // Change parameter name to title
    setPopupContent(title); // Set the title directly
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent("");
  };

  return (
    <div id="skills">
      <h1 className="small">Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="skill-button"
            onClick={() => handleSkillClick(skill.title)} // Pass skill.title
          >
            <img src={skill.icon} alt={skill.alt} className="skill-icon" />
            <p className="bold">{skill.title}</p>
          </button>
        ))}
      </div>
      {showPopup && <Popup content={popupContent} onClose={closePopup} />}
    </div>
  );
}

export default Skills;
