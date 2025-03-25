// src/Pages/Home/WorkExperience.jsx
import React from "react";
import data from "../../data/index.json";
import { FaBriefcase } from "react-icons/fa";
import "./WorkExperience.css";

export default function WorkExperience() {
  return (
    <section id="work-experience" className="work-experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="work-timeline">
          {data.experience.map((item, index) => (
            <div className="work-entry" key={index}>
              <div className="work-icon">
                <FaBriefcase />
              </div>

              <div className="work-content">
                <h3 className="work-role">
                  {item.title} at <span className="work-company">{item.company}</span>
                </h3>
                <div className="work-details">
                  <p className="work-location">{item.location}</p>
                  <p className="work-dates">{item.dates}</p>
                </div>
                <p className="work-description">{item.description}</p>
                {item.responsibilities && (
                  <ul className="work-responsibilities">
                    {item.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}