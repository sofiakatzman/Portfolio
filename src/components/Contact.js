import React, { useState } from "react";
import emailjs from "emailjs-com";
import ornament from "../assets/ornament.svg";

function Contact() {
  const [fromName, setFromName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

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
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 15000); // Hide after 15 seconds
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div>
      <div className="contact-form">
        {/* Ornament images */}
        <img src={ornament} alt="Ornament" className="ornament top-left" />
        <img src={ornament} alt="Ornament" className="ornament top-right" />
        <img src={ornament} alt="Ornament" className="ornament bottom-left" />
        <img src={ornament} alt="Ornament" className="ornament bottom-right" />

        <h1>Contact Me</h1>
        <div className="email-form-container">
          <div className="email-form">
            {showConfirmation ? (
              <div className="confirmation-message">
                <p>I've received your message!</p>
                <p>You will hear from me soon.</p>
              </div>
            ) : (
              <div>
                <p>
                  <b>Ready to get started?</b>
                </p>
                <p>
                  Fill out the form below, and I'll get back to you as soon as
                  possible!
                </p>
                <form onSubmit={handleSubmit}>
                  <label>Full Name:</label>
                  <input
                    className="form-input"
                    type="text"
                    value={fromName}
                    onChange={(e) => setFromName(e.target.value)}
                    required
                    placeholder="Jane Doe"
                  />

                  <label>Email Address:</label>
                  <input
                    type="email"
                    className="form-input"
                    value={fromEmail}
                    onChange={(e) => setFromEmail(e.target.value)}
                    required
                    placeholder="name@email.com"
                  />

                  <label>Message:</label>
                  <textarea
                    value={message}
                    className="form-input"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Let's work together!"
                  />

                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
