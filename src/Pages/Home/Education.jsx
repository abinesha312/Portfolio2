import data from "../../data/index.json";

export default function MyEducation() {
  return (
    <section className="education--section" id="myEducation">
      <div className="education--container">
        <p className="section--title">My Education</p>
        <h2 className="education--section--heading">My Academic Background</h2>
      </div>
      <div className="education--section--container">
        {data.education.map((item, index) => (
          <div key={index} className="education--section--card">
            <h3 className="education--section--title">{item.degree} in {item.field}</h3>
            <p className="education--section--dates">{item.dates} at {item.institution}, {item.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}