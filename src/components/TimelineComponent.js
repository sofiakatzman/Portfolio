import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import education_icon from "../assets/timeline/education-solid.png";
import work_icon from "../assets/timeline/work-solid.png";
import personal_icon from "../assets/timeline/personal-solid.png";

function getIcon(aspect_id) {
  switch (aspect_id) {
    case "education":
      return (
        <img
          src={education_icon}
          alt="Education Icon"
          className="timeline-icon"
        />
      );
    case "work":
      return <img src={work_icon} alt="Work Icon" className="timeline-icon" />;
    case "personal":
      return (
        <img
          src={personal_icon}
          alt="Personal Icon"
          className="timeline-icon"
        />
      );
    default:
      return null;
  }
}

function TimelineComponent({ data }) {
  return (
    <>
      {data && (
        <VerticalTimelineElement
          key={data.id}
          className={data.aspect_id.toString()}
          contentStyle={{ background: "white" }}
          contentArrowStyle={{ borderRight: "15px solid white" }}
          date={data.date}
          iconStyle={{
            background: "#EBE8EA",
            color: "#966B9D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          icon={getIcon(data.aspect_id)}
        >
          <h3 className="vertical-timeline-element-title">{data.header}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {data.subheader}
          </h4>
          <p className="vertical-timeline-element-description">
            {data.description}
          </p>
        </VerticalTimelineElement>
      )}
    </>
  );
}

export default TimelineComponent;
