import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const links = [
    {
      title: "Services",
      link: "/services",
      alt: "my services",
    },
    {
      title: "My Story",
      link: "/story",
      alt: "my story",
    },
    {
      title: "Work",
      link: "/work",
      alt: "my work",
    },
    {
      title: "Contact",
      link: "#contact",
      alt: "scroll down to contact form",
    },
    {
      title: "Github",
      link: "https://github.com/sofiakatzman",
      alt: "my github",
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/sofia-katzman/",
      alt: "my linked in",
    },
  ];

  return (
    <div>
      <div className="navigation-container">
        {links.map((link, index) => (
          <div key={index} className="navigation-button">
            {link.link.startsWith("http") || link.link.startsWith("#") ? (
              <a href={link.link} alt={link.alt}>
                {link.title}
              </a>
            ) : (
              <Link to={link.link} alt={link.alt}>
                {link.title}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
