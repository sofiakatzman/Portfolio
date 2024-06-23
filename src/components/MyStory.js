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
      <h1>My Story</h1>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => handleSelect("timeline")}
          style={{
            marginRight: "10px",
            backgroundColor: view === "timeline" ? "lightgray" : "white",
          }}
        >
          View the Timeline
        </button>
        <button
          onClick={() => handleSelect("narrative")}
          style={{
            backgroundColor: view === "narrative" ? "lightgray" : "white",
          }}
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
