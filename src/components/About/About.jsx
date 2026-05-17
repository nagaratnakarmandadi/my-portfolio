import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <h1>About Me</h1>

      <p className="about-description">
        Motivated Computer Science student passionate about
        Java Full Stack Development, backend technologies,
        and problem-solving.

        Currently learning Core Java, DSA, JDBC, and modern
        web technologies while continuously improving logical
        thinking through daily coding practice and projects.
      </p>

      <div className="about-cards">

        <div className="about-card">
          <h2>Frontend</h2>

          <p>
            Building responsive interfaces using
            HTML, CSS, JavaScript, and React.js.
          </p>
        </div>

        <div className="about-card">
          <h2>Backend</h2>

          <p>
            Learning Core Java, JDBC,
            OOPs concepts, and backend logic.
          </p>
        </div>

        <div className="about-card">
          <h2>Problem Solving</h2>

          <p>
            Practicing DSA and aptitude
            to improve logical thinking skills.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;