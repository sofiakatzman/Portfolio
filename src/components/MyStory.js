import React, { useState } from "react";
import Timeline from "./Timeline";
import Narrative from "./Narrative";
import BackButton from "./BackButton";

function MyStory() {
  const [view, setView] = useState(""); // Initially no view selected

  const handleSelect = (selectedView) => {
    setView(selectedView);
  };

  return (
    <div>
      <BackButton />
      <h1 className="story-header">MY STORY</h1>
      <div className="story-navigation-container">
        <button
          onClick={() => handleSelect("timeline")}
          className={`story-navigation ${view === "timeline" ? "active" : ""}`}
        >
          View the Timeline
        </button>
        <button
          onClick={() => handleSelect("narrative")}
          className={`story-navigation ${view === "narrative" ? "active" : ""}`}
        >
          Read the Story
        </button>
      </div>
      {view === "timeline" && <Timeline />}
      {view === "narrative" && <Narrative />}
    </div>
  );
}

export default MyStory;
