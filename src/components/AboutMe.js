import React from "react";
import asterisk from "../assets/asterisk.svg";

function AboutMe() {
  const doodle = <img src={asterisk} alt="asterisk doodle" />;

  return (
    <div id="about">
      <div className="header">
        {doodle}
        <h1 className="small">ABoUT ME</h1>
        {doodle}
      </div>
      <p>
        Driven by my passions, I've transitioned from operations management to
        design, and now to software engineering. This journey has equipped me
        with a comprehensive understanding of various fields, enabling me to
        deliver unparalleled industry insights and solutions to any problem at
        hand.
      </p>
      <p>
        My ability to seamlessly integrate these disciplines and skills ensures
        that every project is executed with precision and innovation.
      </p>
    </div>
  );
}

export default AboutMe;
