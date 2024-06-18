import React from "react";
import Intro from "./Intro";
import Navigation from "./Navigation";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import WorkSnip from "./WorkSnip";
import Prospecting from "./Prospecting";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      {<Intro />}
      {<Navigation />}
      {<Skills />}
      {<AboutMe />}
      {<WorkSnip />}
      {<Prospecting />}
      {<Contact />}
    </div>
  );
}

export default Home;
