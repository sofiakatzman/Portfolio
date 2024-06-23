import React from "react";
import SKILLS from "../assets/skills";
import Contact from "./Contact";
import BackButton from "./BackButton";

const ServicesPage = () => {
  return (
    <div>
      <BackButton />
      <div className="services-container">
        <header>
          <h1 className="services-header">Services Offered</h1>
          <p>
            I offer expertise in various areas to meet your project needs.
            Whether it's design, development, or operations, I'm ready to help
            bring your ideas to life.
          </p>
        </header>

        {SKILLS.map((skill, index) => (
          <section key={index} className="service-section">
            <div className="service-header">
              {/* <img src={skill.icon} alt={skill.alt} className="service-icon" /> */}
              <h2 className="service-header">{skill.data.title}</h2>
            </div>
            <p>{skill.data.body}</p>
            <div className="experience-list">
              <h3>{skill.data.header1}</h3>
              <ul>
                {skill.data.experience.map((exp, idx) => (
                  <li key={idx}>{exp}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <footer className="services-footer">
          <Contact />
        </footer>
      </div>
    </div>
  );
};

export default ServicesPage;
