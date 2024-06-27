export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Abinesh Haridoss</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Software </span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I transform complex problems into elegant, efficient solutions, 
            <br /> always pushing the boundaries of innovation. Let's code the future together!
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
