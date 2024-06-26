import React from "react";
import bubble from "../assets/SpeechBubble.svg";

function Prospecting() {
  return (
    <div>
      <div className="header">
        <h1 className="small">need help?</h1>
        <img src={bubble} alt="message bubble - contact me" />
      </div>
      <p>
        Ready to use my versatile skill set, I'm here to help you reach and
        surpass your goals!With equipped with mastery in design, development,
        operations, and more, I offer unmatched versatility to tackle any
        challenge.
      </p>
      <p>
        Whether you have an app in mind, are looking for a captivating webpage
        or asset, need streamlined operations, or require innovative solutions,
        I have the skills and knowledge to deliver exceptional results. Let's
        collaborate to bring your vision to life and propel your project to
        success
      </p>
    </div>
  );
}

export default Prospecting;
