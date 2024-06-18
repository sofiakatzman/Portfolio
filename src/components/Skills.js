import React from "react";
import design_icon from "../assets/icons/design_icon.png";
import dev_icon from "../assets/icons/development_icon.png";
import ops_icon from "../assets/icons/ops_icon.png";

function Skills() {
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

  return (
    <div id="skills">
      <h1 className="small">Skills</h1>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <button key={index} className="skill-button">
            <img src={skill.icon} alt={skill.alt} className="skill-icon" />
            <p className="bold">{skill.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Skills;
