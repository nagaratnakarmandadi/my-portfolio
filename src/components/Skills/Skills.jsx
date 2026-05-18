import "./Skills.css";
import { SiHtml5, SiJavascript, SiReact, SiMysql, SiGit, SiGithub, SiMongodb, SiSpringboot, SiDocker, SiPostgresql, SiPostman, SiSpring, SiEclipseide } from "react-icons/si";
import { FaJava, FaCss3 } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";

function Skills() {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        { name: "Spring Security", icon: SiSpring, color: "#6DB33F" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3, color: "#1572B6" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" }
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Eclipse IDE", icon: SiEclipseide, color: "#2C2255" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "VS Code", icon: DiVisualstudio, color: "#007ACC" }
      ]
    }
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

      <div className="skills-container">
        {skillCategories.map((category, catIdx) => (
          <div className="skills-category" key={catIdx}>
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => {
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;