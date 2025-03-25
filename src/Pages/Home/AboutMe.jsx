import { useState } from 'react';

export default function AboutMe() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="about--section" id="AboutMe">
      <div className="stars-background"></div>
      <div className="about--content-wrapper">
        <div className="about--header">
          <p className="about--subtitle">INTRODUCTION</p>
          <h1 className="about--title">About Me</h1>
        </div>
        <div
          className="about--card"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="about--card-content">
            <h2 className="about--card-title">Professional Journey</h2>
            <p className="about--card-description">
              I'm Abinesh Haridoss, a Master's student in Computer Science at the University of North Texas with 3 years of experience in startups and multinational organizations. I specialize in Generative AI, RAG applications, and full-stack development, leveraging cutting-edge technologies like LLMs, Azure, and React. I've built scalable AI systems, automated workflows, and conducted insightful webinars for tech communities, including Oracle. A passionate blogger and problem-solver, I enjoy sharing discoveries and crafting solutions that drive impact and innovation.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about--section {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 0;
          overflow: hidden;
        }

        .stars-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #120136 0%, #020024 100%);
          z-index: -2;
        }

        .stars-background::before,
        .stars-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .stars-background::before {
          background-image: 
            radial-gradient(#ffffff 1px, transparent 1px),
            radial-gradient(#ffffff 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: 0 0, 25px 25px;
          opacity: 0.3;
          z-index: -1;
          animation: twinkle 3s infinite alternate;
        }

        .stars-background::after {
          background-image: 
            radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 100px 100px;
          opacity: 0.5;
          z-index: -1;
        }

        @keyframes twinkle {
          0% { opacity: 0.3; }
          100% { opacity: 0.6; }
        }

        .about--content-wrapper {
          max-width: 1200px;
          width: 100%;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .about--header {
          text-align: center;
          margin-bottom: 40px;
        }

        .about--subtitle {
          color: #6a6aff;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .about--title {
          color: #ffffff;
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .about--card {
          background: rgba(76, 76, 124, 0.8);
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .about--card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .about--card-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .about--card-title {
          color: white;
          font-size: 28px;
          font-weight: 600;
          margin-bottom: 20px;
          text-align: center;
        }

        .about--card-description {
          color: #f0f0f8;
          font-size: 16px;
          line-height: 1.8;
          text-align: justify;
        }

        /* Responsive Styles */
        @media screen and (max-width: 1200px) {
          .about--title {
            font-size: 36px;
          }

          .about--card {
            padding: 30px;
          }

          .about--card-title {
            font-size: 24px;
          }

          .about--card-description {
            font-size: 15px;
          }
        }

        @media screen and (max-width: 768px) {
          .about--title {
            font-size: 30px;
          }

          .about--card {
            padding: 20px;
          }

          .about--card-title {
            font-size: 22px;
          }

          .about--card-description {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}