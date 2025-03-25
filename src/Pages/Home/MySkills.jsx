import data from "../../data/index.json";
import { useState } from 'react';

export default function MySkills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="skills--section" id="mySkills">
      <div className="stars-background"></div>
      <div className="portfolio--container">
        <p className="section--title">MY EXPERTISE</p>
        <h2 className="skills--section--heading">Professional Skills</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className={`skills--section--card ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="skills--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .skills--section {
          padding: 100px 0;
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .stars-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #0C0C1D 0%, #11112A 100%);
          z-index: -2;
        }

        .stars-background::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(#ffffff 1px, transparent 1px),
            radial-gradient(#ffffff 1px, transparent 1px);
          background-size: 50px 50px;
          background-position: 0 0, 25px 25px;
          opacity: 0.3;
          z-index: -1;
        }
        
        .portfolio--container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }
        
        .section--title {
          color: #7B78E5;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        
        .skills--section--heading {
          color: #ffffff;
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        
        .skills--section--container {
          display: flex;
          justify-content: center;
          flex-wrap: nowrap;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          overflow-x: auto;
          position: relative;
          z-index: 1;
        }
        
        .skills--section--card {
          background: rgba(26, 26, 46, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 30px 20px;
          flex: 1;
          min-width: 0;
          width: 25%;
          min-height: 400px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(123, 120, 229, 0.2);
        }
        
        .skills--section--card.hovered {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(123, 120, 229, 0.2);
          border-color: rgba(123, 120, 229, 0.5);
        }
        
        .skills--section--card.hovered .skills--section--title {
          color: #7B78E5;
        }
        
        .skills--section--img {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          height: 100px;
        }
        
        .skills--section--img img {
          width: 80px;
          height: auto;
          object-fit: contain;
          background-color: white;
          border-radius: 12px;
          padding: 10px;
        }
        
        .skills--section--card--content {
          text-align: center;
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          overflow: hidden;
        }
        
        .skills--section--title {
          color: white;
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: color 0.3s ease;
        }
        
        .skills--section--description {
          color: #e0e0e0;
          font-size: 14px;
          line-height: 1.5;
          flex: 1;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 10;
          -webkit-box-orient: vertical;
        }
        
        /* Responsive Styles */
        @media screen and (max-width: 1200px) {
          .skills--section--container {
            padding: 0 15px;
          }
          
          .skills--section--card {
            padding: 25px 15px;
          }
          
          .skills--section--title {
            font-size: 20px;
          }
          
          .skills--section--description {
            font-size: 13px;
            -webkit-line-clamp: 9;
          }
        }
        
        @media screen and (max-width: 992px) {
          .skills--section--container {
            flex-direction: column;
            align-items: stretch;
          }
          
          .skills--section--card {
            width: 100%;
            min-width: 100%;
          }
        }
        
        @media screen and (max-width: 768px) {
          .skills--section--container {
            overflow-x: auto;
            padding-bottom: 20px;
            margin-bottom: 20px;
            scrollbar-width: thin;
          }
          
          .skills--section--container::-webkit-scrollbar {
            height: 6px;
          }
          
          .skills--section--container::-webkit-scrollbar-thumb {
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
          }
        }
      `}</style>
    </section>
  );
}