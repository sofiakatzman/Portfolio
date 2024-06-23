import React from "react";
import bullet from "../assets/bulletpoint.svg";
import scallop from "../assets/footerscallop.svg";

function Footer() {
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
      <img src={scallop} alt="Flower Scallop Border" className="scallop" />
      <div className="footer-sections">
        {Object.keys(footerLinks).map((sectionTitle, index) => (
          <footer key={index} className="footer-section">
            <h3>{sectionTitle}</h3>
            <div className="bullet-list">
              {footerLinks[sectionTitle].map((link, index) => (
                <div key={index} className="bullet-list-item">
                  <img src={bullet} alt="+" />
                  <a href={link.url}>{link.text}</a>
                </div>
              ))}
            </div>
          </footer>
        ))}
      </div>
    </div>
  );
}

export default Footer;
