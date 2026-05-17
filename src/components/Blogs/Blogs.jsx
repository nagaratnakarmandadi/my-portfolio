import './Blogs.css';
import { FaMediumM } from 'react-icons/fa';

function Blogs() {
  const blogs = [
    {
      title: "Have you ever committed a mistake? 🤔",
      date: "Feb 23, 2024",
      link: "https://medium.com"
    },
    {
      title: "A few lessons, that one should learn!",
      date: "Sep 20, 2023",
      link: "https://medium.com"
    },
    {
      title: "Unleashing Productivity with Google Workspace",
      date: "Aug 20, 2023",
      link: "https://medium.com"
    }
  ];

  return (
    <section className="section blogs" id="blogs">
      <div className="section-title-container">
        <span className="section-watermark">Articles</span>
        <div className="section-title">
          <div className="section-title-line"></div>
          Blogs / Articles
        </div>
      </div>

      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-icon">
              <FaMediumM />
            </div>
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-date">{blog.date}</p>
            <a href={blog.link} target="_blank" rel="noreferrer" className="blog-link">
              Read on Medium &rarr;
            </a>
          </div>
        ))}
      </div>

      <div className="blogs-action">
        <a href="https://medium.com" target="_blank" rel="noreferrer">
          <button className="btn-primary">View All Blogs &rarr;</button>
        </a>
      </div>
    </section>
  );
}

export default Blogs;
