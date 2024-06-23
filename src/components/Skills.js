import React, { useState } from "react";
import Popup from "./Popup";
import SKILLS from "../assets/skills";

function Skills() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleSkillClick = (title) => {
    setPopupContent(title);
    setShowPopup(true);
    scrollToTop();
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupContent("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="skills">
      <h1 className="small">SKillS</h1>
      <div className="skills-container">
        {SKILLS.map((skill, index) => (
          <button
            key={index}
            className="skill-button"
            onClick={() => handleSkillClick(skill.title)}
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
