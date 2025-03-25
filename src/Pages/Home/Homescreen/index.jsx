// src/Pages/Home/Homescreen/index.jsx
import React from "react";
import AnimatedBackground from "../AnimatedBackground";
import Navbar from "../Navbar";
import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import MySkills from "../MySkills";
import MyPortfolio from "../MyPortfolio";
import Education from "../Education";
import WorkExperience from "../Work";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <Education />
      <WorkExperience />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}