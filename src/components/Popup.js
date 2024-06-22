import React from "react";
import PopupContent from "./PopupContent";

function Popup({ content, onClose }) {
  return (
    <div className="skills-popup">
      <div className="popup-content">
        <button onClick={onClose} className="close-button">
          x
        </button>
        <PopupContent content={content} />
      </div>
    </div>
  );
}

export default Popup;
