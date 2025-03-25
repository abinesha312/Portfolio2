// src/Pages/Home/HeroSection.jsx
import React from "react";
import "./HeroSection.css"; // Create this file

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Abinesh Haridoss</span>
          </h1>
          <h2 className="hero-subtitle">AI Full Stack Developer</h2>
          <p className="hero-description">
            I build beautiful and functional web experiences with modern technologies.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary">Get In Touch</a>
            <a href="#portfolio" className="btn-secondary">View My Work</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <img src="/img/AbineshHaridoss.jpg" alt="Abinesh Haridoss" />
          </div>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
}