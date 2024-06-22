import React, { useState } from "react";
import design_icon from "../assets/icons/design_icon.png";
import dev_icon from "../assets/icons/development_icon.png";
import ops_icon from "../assets/icons/ops_icon.png";
import Popup from "./Popup";

function Skills() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const skills = [
    {
      title: "Design",
      icon: design_icon,
      alt: "design icon - pencil",
    },
    {
      title: "Dev",
      icon: dev_icon,
      alt: "development icon - mouse cursor",
    },
    {
      title: "Ops",
      icon: ops_icon,
      alt: "operations icon - magic wand",
    },
  ];

  const handleButtonClick = (title) => {
    setPopupContent(title);
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
            onClick={() => handleButtonClick(skill.title)}
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
