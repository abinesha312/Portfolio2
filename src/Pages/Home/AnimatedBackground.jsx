// src/Pages/Home/AnimatedBackground.jsx
import React from "react";
import "./AnimatedBackground.css";

export default function AnimatedBackground() {
    return (
        <div className="animated-background">
            <div className="gradient-sphere sphere-1"></div>
            <div className="gradient-sphere sphere-2"></div>
            <div className="gradient-sphere sphere-3"></div>
            <div className="gradient-sphere sphere-4"></div>
            <div className="stars"></div>
        </div>
    );
}