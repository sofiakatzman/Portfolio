import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation(){

    const links = [
        {
          title: "work",
          link: "/work",
          alt: "my work",
        },
        // {
        //   title: "fun",
        //   link: "/play",
        //   alt: "my play",
        // },
        {
          title: "about",
          link: "/about",
          alt: "about",
        },
        {
          title: "contact",
          link: "/contact",
          alt: "scroll down to contact form",
        },
      ];



    return(
        <div className="border-shadow navigation-container">
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
            {index < links.length - 1 && <span className="circle-divider" />}
          </div>
        ))}
      </div>
    )
}

export default Navigation