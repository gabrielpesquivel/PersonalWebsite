import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-name">
        <RouterLink to="/" className="home-link">Gabriel Esquivel</RouterLink>
      </div>
      <div className="navbar-links">
        <ul>
          <li><Link to="about" smooth={true}>About</Link></li>
          <li><Link to="experience" smooth={true}>Experience</Link></li>
          <li><Link to="projects" smooth={true}>Projects</Link></li>
          <li><Link to="skills" smooth={true}>Skills</Link></li>
          <li><RouterLink to="/blog" className="blog-link">Blog</RouterLink></li>
        </ul>
      </div>
      <div className="navbar-icons">
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
