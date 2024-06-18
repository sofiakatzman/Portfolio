import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_fud4mps";
    const templateId = "template_nljzs3b";
    const userId = "5ZRcT36aMkhsknnQP";

    emailjs
      .send(
        serviceId,
        templateId,
        {
          to_email: "katzmansof@gmail.com",
          message: message,
          from_name: fromName,
          from_email: fromEmail,
        },
        userId
      )
      .then((response) => {
        console.log("Email sent successfully!", response);
        setFromName("");
        setFromEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <div>
      <div>
        <h1 className="small">Contact Me</h1>
        <p>Ready to get started?</p>
        <p>
          Fill out the form below, and I'll get back to you as soon as possible!
        </p>
        <div className="email-form-container">
          <div className="email-form">
            <form onSubmit={handleSubmit}>
              <label>
                name:
                <input
                  type="text"
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  required
                />
              </label>
              <label>
                email address:
                <input
                  type="email"
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                message:
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>
              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
