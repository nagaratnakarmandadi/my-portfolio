import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun, FaGithub } from "react-icons/fa";
import PropTypes from 'prop-types';

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <h1 className="logo">
          <span className="logo-first">Nagaratnakar</span>
          <span className="logo-last">Mandadi</span>
        </h1>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={activeLink === link.name ? "active" : ""}
                onClick={() => {
                  setActiveLink(link.name);
                  setMenuOpen(false);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="nav-actions">
            <a href="https://github.com/nagaratnakarmandadi" target="_blank" rel="noreferrer" className="btn-nav-icon" aria-label="GitHub">
              <FaGithub />
            </a>
            <button className="btn-nav-icon" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Theme">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};