import { useState, useEffect } from "react";
import { Typewriter } from 'react-simple-typewriter';
import Navbar from "./components/Navbar/Navbar";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import { ScrollReveal } from "./components/ScrollReveal";
import CustomCursor from "./components/CustomCursor/CustomCursor";

import heroImage from "./assets/hero.jpeg";
import resumePdf from "./assets/resume/resume.pdf";
import "./App.css";
import "./AppFooter.css";

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaJava, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { SiSpringboot, SiReact, SiJavascript, SiPostgresql } from "react-icons/si";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle scrolled state
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Toggle back to top button visibility
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <CustomCursor />
      
      {/* Ambient Glowing Nebulas */}
      <div className="ambient-glows">
        <div className="glow-blob glow-1"></div>
        <div className="glow-blob glow-2"></div>
        <div className="glow-blob glow-3"></div>
      </div>

      <div className="background-blobs">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        <div className="bubble bubble-7"></div>
        <div className="bubble bubble-8"></div>
        <div className="bubble bubble-9"></div>
        <div className="bubble bubble-10"></div>
        <div className="bubble bubble-11"></div>
        <div className="bubble bubble-12"></div>
        <div className="bubble bubble-13"></div>
        <div className="bubble bubble-14"></div>
        <div className="bubble bubble-15"></div>
        <div className="bubble bubble-16"></div>
        <div className="bubble bubble-17"></div>
        <div className="bubble bubble-18"></div>
        <div className="bubble bubble-19"></div>
        <div className="bubble bubble-20"></div>
      </div>
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="hero" id="home">
        <div className="hero-content section">
          <div className="hero-image">
            <img src={heroImage} alt="Nagaratnakar Mandadi" className="hero-avatar" />
            
            {/* Floating Tech Logos */}
            <div className="floating-logo tech-java" title="Java">
              <FaJava color="#007396" />
            </div>
            <div className="floating-logo tech-spring" title="Spring Boot">
              <SiSpringboot color="#6DB33F" />
            </div>
            <div className="floating-logo tech-react" title="React.js">
              <SiReact color="#61DAFB" />
            </div>
            <div className="floating-logo tech-js" title="JavaScript">
              <SiJavascript color="#F7DF1E" />
            </div>
            <div className="floating-logo tech-postgres" title="PostgreSQL">
              <SiPostgresql color="#4169E1" />
            </div>
          </div>
          <div className="hero-text-content">
            <h1 className="hero-greeting">Hi, I&apos;m</h1>
            <h1 className="hero-name text-gradient">Nagaratnakar Mandadi</h1>
            <h2 className="hero-role">
              I am a{' '}
              <span className="text-purple">
                <Typewriter
                  words={['Java Developer', 'DSA Enthusiast', 'Backend Developer', 'Full Stack Developer']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="hero-desc">
              I am a 4th year engineering student passionate about building enterprise-grade web
              applications using Java, Spring Boot, and robust full stack architectures.
            </p>
            <div className="hero-buttons">
              <a href="#projects">
                <button className="btn-primary">View Projects &rarr;</button>
              </a>
              <a href={resumePdf} download="Nagaratnakar_Mandadi_Resume.pdf">
                <button className="btn-secondary" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>Download Resume</button>
              </a>
              <a href="https://github.com/nagaratnakarmandadi" target="_blank" rel="noreferrer">
                <button className="btn-secondary"><FaGithub /> GitHub Profile</button>
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/nagaratnakarmandadi" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/nagaratnakar-mandadi" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://instagram.com/nagaratnakar_mandadi" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className={`scroll-indicator ${scrolled ? 'fade-out' : ''}`}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll Down</span>
        </div>
      </section>

      <ScrollReveal><Education /></ScrollReveal>
      
      <div className="section divider-container">
        <div className="glowing-divider"></div>
      </div>
      
      <ScrollReveal><Skills /></ScrollReveal>
      
      <div className="section divider-container">
        <div className="glowing-divider"></div>
      </div>
      
      <ScrollReveal><Projects /></ScrollReveal>
      <ScrollReveal><Experience /></ScrollReveal>
      <ScrollReveal><Blogs /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      
      <footer className="footer">
        <div className="footer-buttons">
          <a href="https://github.com/nagaratnakarmandadi" target="_blank" rel="noreferrer" className="footer-btn" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/nagaratnakar-mandadi" target="_blank" rel="noreferrer" className="footer-btn" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/nagaratnakar_mandadi" target="_blank" rel="noreferrer" className="footer-btn" title="Instagram">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-btn" title="Twitter">
            <FaTwitter />
          </a>
          <a href="mailto:nagaratnakarmandadi@gmail.com" className="footer-btn" title="Email">
            <FaEnvelope />
          </a>
          <a href="#home" className="footer-btn" title="Back to Top">
            <FaArrowUp />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Nagaratnakar Mandadi. Built with React & Vite.</p>
      </footer>
      
      {showBackToTop && (
        <a href="#home" className="floating-back-to-top" title="Back to Top">
          <FaArrowUp />
        </a>
      )}
    </div>
  );
}

export default App;