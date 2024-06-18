import React from "react";
import bullet from "../assets/bulletpoint.svg";

function Footer() {
  // Example data for footer links
  const footerLinks = {
    Navigate: [
      { text: "Skills", url: "#skills" },
      { text: "About", url: "#about" },
      { text: "Work", url: "#work" },
    ],
    Portfolio: [
      { text: "My Story", url: "/story" },
      { text: "Dev Work", url: "/work/dev" },
      { text: "Design Work", url: "/work/design" },
    ],
    Services: [
      { text: "Development", url: "/services/dev" },
      { text: "Automations", url: "/services/automations" },
      { text: "Design", url: "/services/design" },
    ],
  };

  return (
    <div className="footer">
      {Object.keys(footerLinks).map((sectionTitle, index) => (
        <div key={index} className="footer-section">
          <h3>{sectionTitle}</h3>
          <div className="bullet-list">
            {footerLinks[sectionTitle].map((link, index) => (
              <div key={index} className="bullet-list-item">
                <img src={bullet} alt="+" />
                <a href={link.url}>{link.text}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Footer;
