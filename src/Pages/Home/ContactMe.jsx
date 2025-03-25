import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        // Clear form data
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-header">
        <h2>Let's Connect!</h2>
        <p>Have a great idea or just want to say hello? I'm all ears and excited to hear from you.</p>
        {submitted && (
          <p className="submit-confirmation">
            Thanks for reaching out! I can't wait to read your message.
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="What should I call you?"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="How can I get back to you?"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="What's on your mind?"
          />
        </div>
        <button type="submit" className="submit-button">
          Send Your Thoughts
        </button>
      </form>
    </section>
  );
}