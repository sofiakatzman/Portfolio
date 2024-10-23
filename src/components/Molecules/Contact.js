import React, { useState } from "react";
import emailjs from "emailjs-com";
import FormInput from "../Atoms/FormInput.js"

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
        setTimeout(() => setShowConfirmation(false), 15000); 
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div >
    {showConfirmation ? (
      <div className="form-container">
        <p>I've received your message!</p>
        <p>You will hear from me soon.</p>
      </div>
    ) : (
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Full Name:"
            type="text"
            value={fromName}
            onChange={(e) => setFromName(e.target.value)}
            required
            placeholder="Full Name"
            isMessage={false}
          />

          <FormInput 
            label="Email Address:"
            type="email"
            value={fromEmail}
            onChange={(e) => setFromEmail(e.target.value)}
            required
            placeholder="Email"
            isMessage={false}
          />

          <FormInput 
            label="Message:"
            type="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Type your message here"
            isMessage={true}
          />
          <button type="submit" className="button submit">Send</button>
        </form>
      </div>
    )}
  </div>
  );
}

export default Contact;
