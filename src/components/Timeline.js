import React, { useState } from "react";
import TimelineComponent from "./TimelineComponent";
import TimelineData from "./TimelineData";
// import filter icons
import icon_all from "../assets/timeline/all.png";
import icon_work from "../assets/timeline/work.png";
import icon_education from "../assets/timeline/education.png";
import icon_personal from "../assets/timeline/personal.png";
// import sort icons - selected and not-selected states
import upSelectedIcon from "../assets/timeline/filter/up-selected.svg";
import downSelectedIcon from "../assets/timeline/filter/down_selected.svg";
import upUnselectedIcon from "../assets/timeline/filter/up-unselected.svg";
import downUnselectedIcon from "../assets/timeline/filter/down_unselected.svg";

const aspectIcons = {
  all: { icon: icon_all, label: "All" },
  education: { icon: icon_education, label: "Education" },
  work: { icon: icon_work, label: "Work" },
  personal: { icon: icon_personal, label: "Personal" },
};

function Timeline() {
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredData = TimelineData.filter((item) =>
    filter === "all" ? true : item.aspect_id === filter
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "asc") {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <div className="filter-parent">
        <div className="filter-container">
          {Object.keys(aspectIcons).map((aspectId) => (
            <button
              key={aspectId}
              onClick={() => setFilter(aspectId === filter ? "all" : aspectId)}
              className="filter-button"
            >
              <img
                src={aspectIcons[aspectId].icon}
                alt={aspectId}
                className="filter-icon"
              />
              <span className="filter-label">
                {aspectIcons[aspectId].label}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="sort-container">
        <span className="sort-label"></span>
        <div className="sort-text">
          {sortOrder === "asc"
            ? "Sorted by Past to Present"
            : "Sorted by Present to Past"}
        </div>{" "}
        <button onClick={toggleSortOrder} className="sort-button">
          <img
            src={sortOrder === "asc" ? upSelectedIcon : upUnselectedIcon}
            alt="Ascending"
            className="sort-icon"
          />
        </button>
        <button onClick={toggleSortOrder} className="sort-button">
          <img
            src={sortOrder === "desc" ? downSelectedIcon : downUnselectedIcon}
            alt="Descending"
            className="sort-icon"
          />
        </button>
      </div>
      <div className="timeline-container">
        {sortedData.map((item) => (
          <TimelineComponent key={item.id} data={item} />
        ))}
      </div>
      <div className="milestones-shameless-plug">
        <p>
          This idea of using a timeline to depict my story is based off my
          thesis for my Software Engineering certification. The project is named
          Milestones.
        </p>
        <p>
          View the project{" "}
          <a href="PROJECT_LINK_HERE">
            <strong>here</strong>
          </a>
          !
        </p>
      </div>
    </div>
  );
}

export default Timeline;
