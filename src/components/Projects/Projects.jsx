import "./Projects.css";
import jobPortalImg from "../../assets/projects/job-portal.png";
import portfolioImg from "../../assets/projects/portfolio.png";
import studentManagementImg from "../../assets/projects/student-management.png";
import ecommerceImg from "../../assets/projects/ecommerce.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Job Portal System",
      description: "Backend-based job portal system with recruiter and candidate roles, JWT authentication, and job management.",
      tags: ["FastAPI", "PostgreSQL", "JWT", "SQLAlchemy"],
      image: jobPortalImg,
      github: "https://github.com/nagaratnakarmandadi/job-portal",
      demo: "https://github.com/nagaratnakarmandadi/job-portal"
    },
    {
      title: "Portfolio Website",
      description: "Modern React portfolio with animations, responsive design, and professional UI sections.",
      tags: ["React.js", "CSS", "JavaScript"],
      image: portfolioImg,
      github: "https://github.com/nagaratnakarmandadi/my-portfolio",
      demo: "https://nagaratnakarmandadi.github.io/my-portfolio"
    },
    {
      title: "Student Management System",
      description: "CRUD-based student management application with database integration.",
      tags: ["Java", "JDBC", "MySQL"],
      image: studentManagementImg,
      github: "https://github.com/nagaratnakarmandadi/student-management",
      demo: "https://github.com/nagaratnakarmandadi/student-management"
    },
    {
      title: "E-Commerce Backend Platform",
      description: "An enterprise-grade full-stack shopping platform with Spring Security, JWT session handling, product cataloging, and database integration.",
      tags: ["Spring Boot", "Spring Security", "React.js", "MySQL", "Hibernate"],
      image: ecommerceImg,
      github: "https://github.com/nagaratnakarmandadi/ecommerce-backend",
      demo: "https://github.com/nagaratnakarmandadi/ecommerce-backend"
    }
  ];

  const getTagColorClass = (tag) => {
    const t = tag.toLowerCase();
    if (t.includes("react")) return "tag-react";
    if (t.includes("spring") || t.includes("hibernate")) return "tag-spring";
    if (t.includes("java") || t.includes("jdbc")) return "tag-java";
    if (t.includes("mysql") || t.includes("postgres") || t.includes("sql")) return "tag-db";
    if (t.includes("jwt") || t.includes("security")) return "tag-security";
    if (t.includes("fastapi")) return "tag-fastapi";
    if (t.includes("js") || t.includes("javascript")) return "tag-javascript";
    return "tag-default";
  };

  return (
    <section className="section projects" id="projects">
      <div className="section-title-container">
        <span className="section-watermark">Work</span>
        <div className="section-title">
          <div className="section-title-line"></div>
          Projects
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span className={`project-tag ${getTagColorClass(tag)}`} key={idx}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link-btn github">
                  <FaGithub /> Code
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-link-btn demo">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;