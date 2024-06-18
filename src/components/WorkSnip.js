import React from "react";
import design_icon from "../assets/work-icon/design_worksnip.png";
import dev_icon from "../assets/work-icon/development_worksnip.png";

function WorkSnip() {
  const work = [
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
  ];

  return (
    <div>
      <div className="work" id="work">
        <h1 className="small">My Work</h1>
        <div className="work-container">
          {work.map((work, index) => (
            <button key={index} className="work-button">
              <img src={work.icon} alt={work.alt} className="work-icon" />
              <p className="bold">{work.title}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkSnip;
