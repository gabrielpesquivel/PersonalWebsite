import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
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
          <li><Link to="contact" smooth={true}>Contact</Link></li>
          <li><RouterLink to="/blog" className="blog-link">Blog</RouterLink></li>
        </ul>
      </div>
      <div class="navbar-placeholder"></div>
    </nav>
  );
}

export default Navbar;
