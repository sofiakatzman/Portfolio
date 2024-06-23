import React from "react";
import skills from "../assets/skills";
import bullet from "../assets/bulletpoint.svg";
import Technology from "./Technology";

function PopupContent({ content }) {
  const skill = skills.find((skill) => skill.title.toString() === content);

  if (!skill) {
    return (
      <div>Sorry, there's an error on our end. Send me a message instead!</div>
    );
  }

  return (
    <div className="content">
      <h2>{skill.data.title}</h2>
      <p>{skill.data.body}</p>
      <h3>{skill.data.header1}</h3>
      <div className="content-container">
        <ul className="content-list">
          {skill.data.experience.map((exp, index) => (
            <li key={index} className="bullet-list-item small">
              <img src={bullet} alt="Bullet Point" />
              {exp}
            </li>
          ))}
        </ul>
      </div>
      <h3>{skill.data.header2}</h3>
      <div className="technologies-container">
        <ul className="content-list">
          {Array.isArray(skill.data.technologies) &&
            skill.data.technologies.map((tech, index) => (
              <li key={index} className="technologies">
                <Technology name={tech.name} icon={tech.icon} />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PopupContent;
