import React from "react";

function WorkSnip() {
  const work = [
    {
      title: "Design",
      icon: "",
      alt: "design icon - pencil",
    },
    {
      title: "Dev",
      icon: "",
      alt: "development icon - mouse cursor",
    },
  ];

  return (
    <div>
      <div className="work-container" id="work">
        <h2>My Work</h2>
        {work.map((skill, index) => (
          <button key={index} className="work-button">
            <img src={work.icon} alt={skill.alt} className="work-icon" />
            <span>{work.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default WorkSnip;
