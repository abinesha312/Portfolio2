import React from "react";
import "./SkillsShowcase.css"; // Ensure this path is correct

export default function SkillsShowcase() {
  const skills = {
    Programming: [
      { name: "Python", imgSrc: "./img/python.png" },
      { name: "SQL/Advanced SQL", imgSrc: "./img/SQL_A.png" },
      { name: "TSQL", imgSrc: "./img/T-Sql.png" },
      { name: ".NET", imgSrc: "./img/NET_Core.png" },
      { name: "ASP.Net", imgSrc: "./img/ASPNet.png" },
      { name: "C#", imgSrc: "./img/CSharp.png" },
      { name: "Node.js", imgSrc: "./img/NodeJS.png" },
      { name: "TypeScript", imgSrc: "./img/TypSc.png" },
      { name: "HTML 5", imgSrc: "./img/Html.png" },
      { name: "CSS", imgSrc: "./img/css.png" },
      { name: "JavaScript", imgSrc: "./img/JavaScript.png" },
      { name: "jQuery", imgSrc: "./img/jQer.png" },
      { name: "Angular", imgSrc: "./img/Angular.png" },
      { name: "Oracle DB", imgSrc: "./img/OracleDB.png" },
      { name: "MongoDB", imgSrc: "./img/MongoDB.png" },
      { name: "ReditDB", imgSrc: "./img/RedisDB.png" },
      { name: "Oracle Cloud Infrastructure (OCI)", imgSrc: "./img/OCI.png" },
      { name: "Microsoft Azure DevOps", imgSrc: "./img/Azure.png" },
      { name: "Amazon Web Services", imgSrc: "./img/Aws.png" },
      { name: "YOLO", imgSrc: "./img/Yolo.png" },
      { name: "Pytorch", imgSrc: "./img/PyT.png" },
      { name: "LLM LangChain", imgSrc: "./img/Langchain.png" },
      { name: "LlamaIndex", imgSrc: "./img/LlamaIndex.png" },
    ],
  };

  const allSkills = Object.values(skills).flat();

  return (
    <section className="skills--section" id="skills">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading">Skills Showcase</h2>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee--inner">
          {allSkills.map((skill, index) => (
            <div key={index} className="skill--item">
              <img src={skill.imgSrc} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}