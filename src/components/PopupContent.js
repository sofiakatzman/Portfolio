import React from "react";
import skills from "../assets/skills";

function PopupContent({ content }) {
  const skill = skills.find((skill) => skill.title.toString() === content);

  if (!skill) {
    return <div>Skill not found</div>;
  }

  return (
    <div>
      <h2>{skill.data.title}</h2>
      <p>{skill.data.body}</p>
      <h3>{skill.data.header1}</h3>
      <ul>
        {skill.data.experience.map((exp, index) => (
          <li key={index}>{exp}</li>
        ))}
      </ul>
      <h3>{skill.data.header2}</h3>
      <ul>
        {Array.isArray(skill.data.technologies) &&
          skill.data.technologies.map((tech, index) => (
            <li key={index}>{tech.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default PopupContent;
