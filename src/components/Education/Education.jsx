import "./Education.css";
import { FaGraduationCap, FaBook, FaSchool } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      institution: "Kakinada Institute of Engineering and Technology",
      degree: "B.Tech - CSE (AI & DS)",
      date: "2023 - Present",
      details: ["Current CGPA: 7.23"],
      icon: FaGraduationCap
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate (MPC)",
      date: "2021 - 2023",
      details: ["Percentage: 89.2%"],
      icon: FaBook
    },
    {
      institution: "St. Ann's Convent English Medium School",
      degree: "ICSE Schooling",
      date: "2010 - 2021",
      details: ["Percentage: 78%"],
      icon: FaSchool
    }
  ];

  return (
    <section className="section education" id="education">
      <div className="section-title-container">
        <span className="section-watermark">History</span>
        <div className="section-title">
          <div className="section-title-line"></div>
          Education
        </div>
      </div>

      <div className="education-timeline">
        {educationData.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <div className="education-item" key={index}>
              <div className="education-icon">
                <Icon />
              </div>
              <div className="education-content">
                <div className="education-header">
                  <div>
                    <h3 className="education-institution">{edu.institution}</h3>
                    <p className="education-degree">{edu.degree}</p>
                  </div>
                  <div className="education-date">
                    <span>{edu.date}</span>
                  </div>
                </div>
                {edu.details.length > 0 && (
                  <ul className="education-details">
                    {edu.details.map((detail, idx) => (
                      <li key={idx}>&bull; {detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;