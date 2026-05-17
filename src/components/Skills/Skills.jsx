import "./Skills.css";
import { SiHtml5, SiJavascript, SiReact, SiMysql, SiGit, SiGithub, SiMongodb, SiSpringboot, SiNodedotjs } from "react-icons/si";
import { FaJava, FaCss3 } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

function Skills() {
  const skills = [
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "VS Code", icon: DiVisualstudio, color: "#007ACC" },
  ];

  return (
    <section className="section skills" id="skills">
      <div className="section-title-container">
        <span className="section-watermark">Arsenal</span>
        <div className="section-title">
          <div className="section-title-line"></div>
          Skills / Tech Stack
        </div>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div className="skill-card" key={index}>
              <div className="skill-icon" style={{ color: skill.color }}>
                <Icon />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;