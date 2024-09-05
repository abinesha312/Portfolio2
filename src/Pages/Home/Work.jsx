import data from "../../data/index.json";

export default function WorkExperience() {
  return (
    <section className="experience--section" id="workExperience">
      <div className="experience--container">
        <p className="section--title">Work Experience</p>
        <h2 className="experience--section--heading">Professional Background</h2>
      </div>
      <div className="experience--section--container">
        {data.experience.map((item, index) => (
          <div key={index} className="experience--section--card">
            <h3 className="experience--section--title">{item.title}</h3>
            <p className="experience--section--dates">{item.dates} at {item.company}, {item.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}