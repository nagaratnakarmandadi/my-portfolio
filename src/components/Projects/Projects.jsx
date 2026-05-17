import "./Projects.css";
import jobPortalImg from "../../assets/projects/job-portal.png";
import portfolioImg from "../../assets/projects/portfolio.png";
import studentManagementImg from "../../assets/projects/student-management.png";
import weatherAppImg from "../../assets/projects/weather-app.png";

function Projects() {
  const projects = [
    {
      title: "Job Portal System",
      description: "Backend-based job portal system with recruiter and candidate roles, JWT authentication, and job management.",
      tags: ["FastAPI", "PostgreSQL", "JWT", "SQLAlchemy"],
      image: jobPortalImg
    },
    {
      title: "Portfolio Website",
      description: "Modern React portfolio with animations, responsive design, and professional UI sections.",
      tags: ["React.js", "CSS", "JavaScript"],
      image: portfolioImg
    },
    {
      title: "Student Management System",
      description: "CRUD-based student management application with database integration.",
      tags: ["Java", "JDBC", "MySQL"],
      image: studentManagementImg
    },
    {
      title: "Weather App",
      description: "Responsive weather application using API integration and modern frontend UI.",
      tags: ["JavaScript", "API", "CSS"],
      image: weatherAppImg
    }
  ];

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
                  <span className="project-tag" key={idx}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;