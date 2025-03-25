// src/Pages/Home/Education.jsx
import React from "react";
import data from "../../data/index.json";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css"; // We'll create this file next

export default function MyEducation() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="education-timeline">
          {data.education.map((item, index) => (
            <div className="education-entry" key={index}>
              <div className="education-icon">
                <FaGraduationCap />
              </div>

              <div className="education-content">
                <h3 className="education-degree">
                  {item.degree} in <span className="education-field">{item.field}</span>
                </h3>
                <div className="education-details">
                  <p className="education-institution">{item.institution}, {item.location}</p>
                  <p className="education-dates">{item.dates}</p>
                </div>
                {item.description && (
                  <p className="education-description">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}