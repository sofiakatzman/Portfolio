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
      <div
        style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
      >
        {Object.keys(aspectIcons).map((aspectId) => (
          <button
            key={aspectId}
            onClick={() => setFilter(aspectId === filter ? "all" : aspectId)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "10px",
              border: "none",
              background: "none",
              minWidth: "50px",
              cursor: "pointer",
            }}
          >
            <img
              src={aspectIcons[aspectId].icon}
              alt={aspectId}
              style={{ width: "40px", height: "40px", marginBottom: "5px" }}
            />
            <span style={{ fontSize: "12px" }}>
              {aspectIcons[aspectId].label}
            </span>
          </button>
        ))}
      </div>

      <div
        style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}
      >
        <span style={{ marginRight: "10px" }}>Sort Order:</span>
        <button
          onClick={toggleSortOrder}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          <img
            src={sortOrder === "asc" ? upSelectedIcon : upUnselectedIcon}
            alt="Ascending"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
        <button
          onClick={toggleSortOrder}
          style={{ border: "none", background: "none", cursor: "pointer" }}
        >
          <img
            src={sortOrder === "desc" ? downSelectedIcon : downUnselectedIcon}
            alt="Descending"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
        <div style={{ fontSize: "12px" }}>
          {sortOrder === "asc" ? "Lower to Higher" : "Higher to Lower"}
        </div>
      </div>

      {sortedData.map((item) => (
        <TimelineComponent key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Timeline;
