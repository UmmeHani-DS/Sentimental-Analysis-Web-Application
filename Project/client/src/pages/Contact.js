import React, { useState } from "react";
import newimg from "../assets/welcome-banner.jpg";
import "../styles/Contact.css";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending the message (you can replace this with your actual logic)
    setTimeout(() => {
      setMessageSent(true);
      setTimeout(() => {
        setMessageSent(false);
        window.location.reload(); // Refresh the page after 10 seconds
      }, 10000); // Hide the message after 10 seconds
    }, 1000); // Show the message for 1 second
  };

  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${newimg})` }}></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        {messageSent && (
          <div className="alert">
            <p>Message Sent!</p>
          </div>
        )}
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            name="name"
            placeholder="Enter full name..."
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter email..."
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
