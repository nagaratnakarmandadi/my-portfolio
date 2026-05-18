import "./Experience.css";
import { FaLaptopCode, FaAward } from "react-icons/fa";

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

      <div className="experience-container">
        {/* Block 1: Senior Intern (Present) */}
        <div className="experience-card senior">
          <div className="experience-logo-box">
            <FaAward className="experience-logo-icon senior-icon" />
            <span className="experience-logo-text">RCTS IIIT-H</span>
            <span className="badge present">Present</span>
          </div>
          
          <div className="experience-content">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">Senior Intern</h3>
                <p className="experience-company">RCTS Internship Program &ndash; IIIT Hyderabad</p>
              </div>
              <div className="experience-date">
                <span>Jun 2026 - Present</span>
              </div>
            </div>
            
            <ul className="experience-details">
              <li>Leading core architecture developments for hackathon coordination portals and secure user management flows.</li>
              <li>Engineered high-performance React client dashboards featuring glassmorphism UIs and smooth micro-animations.</li>
              <li>Designed and scaled secure enterprise Spring Boot backends with JWT authentication and advanced role filters.</li>
            </ul>

            <div className="experience-tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Spring Security</span>
              <span>React.js</span>
              <span>PostgreSQL</span>
              <span>Docker</span>
            </div>
          </div>
        </div>

        {/* Block 2: Junior Intern (Completed) */}
        <div className="experience-card junior">
          <div className="experience-logo-box">
            <FaLaptopCode className="experience-logo-icon junior-icon" />
            <span className="experience-logo-text">RCTS IIIT-H</span>
            <span className="badge completed">Completed</span>
          </div>
          
          <div className="experience-content">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">Junior Intern</h3>
                <p className="experience-company">RCTS Internship Program &ndash; IIIT Hyderabad</p>
              </div>
              <div className="experience-date">
                <span>Aug 2025 - May 2026</span>
              </div>
            </div>
            
            <ul className="experience-details">
              <li>Developed responsive frontend client dashboard components, form validation flows, and localized stylesheets.</li>
              <li>Implemented reliable JDBC database layers and business controllers using MySQL.</li>
              <li>Collaborated within agile sprint cycles, using Git and GitHub for version control and peer code reviews.</li>
            </ul>

            <div className="experience-tech">
              <span>Java</span>
              <span>JDBC</span>
              <span>MySQL</span>
              <span>JavaScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;