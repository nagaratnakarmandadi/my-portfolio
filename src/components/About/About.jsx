import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <h1>About Me</h1>

      <p className="about-description">
        Motivated Computer Science student passionate about
        Java Full Stack Development, robust backend systems,
        and algorithmic problem-solving.
        
        Proficient in Core Java, Spring Boot, relational databases, and modern web architectures. 
        Dedicated to building clean, high-performance, scalable full-stack applications with solid logical foundations.
      </p>

      <div className="about-cards">

        <div className="about-card">
          <h2>Frontend</h2>

          <p>
            Designing responsive, dynamic interfaces using
            HTML5, CSS3, JavaScript, and React.js.
          </p>
        </div>

        <div className="about-card">
          <h2>Backend</h2>

          <p>
            Developing secure, scalable RESTful APIs with 
            Spring Boot, Spring Security (JWT), Hibernate, and relational databases.
          </p>
        </div>

        <div className="about-card">
          <h2>Problem Solving</h2>

          <p>
            Solving complex algorithmic problems using DSA 
            to optimize software performance and system logic.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;