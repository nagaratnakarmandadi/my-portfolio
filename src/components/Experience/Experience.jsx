import "./Experience.css";
import { FaLaptopCode } from "react-icons/fa";

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="section-title-container">
        <span className="section-watermark">Career</span>
        <div className="section-title">
          <div className="section-title-line"></div>
          Experience
        </div>
      </div>

      <div className="experience-card">
        <div className="experience-logo-box">
          <FaLaptopCode className="experience-logo-icon" />
          <span className="experience-logo-text">RCTS IIIT-H</span>
        </div>
        
        <div className="experience-content">
          <div className="experience-header">
            <div>
              <h3 className="experience-role">Junior Developer &rarr; Senior Developer</h3>
              <p className="experience-company">RCTS Internship Program &ndash; IIIT Hyderabad</p>
            </div>
            <div className="experience-date">
              <span>Aug 2025 - Present</span>
            </div>
          </div>
          
          <ul className="experience-details">
            <li>Worked on the Dev Stack Project focusing on Hackathon module development, frontend interaction, dashboard navigation, and workflow improvements.</li>
            <li>Collaborated with the development team to improve user interaction and application features.</li>
          </ul>

          <div className="experience-tech">
            <span>Java</span>
            <span>React.js</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;