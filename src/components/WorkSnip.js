import React from "react";
import { Link } from "react-router-dom";
import design_icon from "../assets/work-icon/design_worksnip.png";
import dev_icon from "../assets/work-icon/development_worksnip.png";

function WorkSnip() {
  // Assuming you have paths set up for DesignWorks and DevWorks components
  const work = [
    {
      title: "Design",
      icon: design_icon,
      alt: "design icon - pencil",
      path: "/work/design",
    },
    {
      title: "Dev",
      icon: dev_icon,
      alt: "development icon - mouse cursor",
      path: "/work/dev",
    },
  ];

  return (
    <div>
      <div className="worksnip" id="work">
        <h1 className="small">My Work</h1>
        <div className="work-container">
          {work.map((workItem, index) => (
            <Link key={index} to={workItem.path} className="work-button">
              <img
                src={workItem.icon}
                alt={workItem.alt}
                className="work-icon"
              />
              <p className="bold">{workItem.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkSnip;
