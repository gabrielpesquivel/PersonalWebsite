import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-name">
        <RouterLink to="/" className="home-link" onClick={closeMenu}>Gabriel Esquivel</RouterLink>
      </div>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="about" smooth={true} onClick={closeMenu}>About</Link></li>
          <li><Link to="experience" smooth={true} onClick={closeMenu}>Experience</Link></li>
          <li><Link to="projects" smooth={true} onClick={closeMenu}>Projects</Link></li>
          <li><Link to="skills" smooth={true} onClick={closeMenu}>Skills</Link></li>
          <li><RouterLink to="/blog" className="blog-link" onClick={closeMenu}>Blog</RouterLink></li>
        </ul>
      </div>
      <div className={`navbar-icons ${isMenuOpen ? 'active' : ''}`}>
        <a href="mailto:gabrielpawluesquivel@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-esquivel-9a65a4209" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/gabrielpesquivel" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/gabidonprime" target="_blank" rel="noopener noreferrer" aria-label="Leetcode">
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
