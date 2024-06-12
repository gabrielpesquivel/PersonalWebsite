import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><RouterLink to="/" className="home-link">Home</RouterLink></li>
        <li><Link to="about" smooth={true}>About</Link></li>
        <li><Link to="experience" smooth={true}>Experience</Link></li>
        <li><Link to="projects" smooth={true}>Projects</Link></li>
        <li><Link to="skills" smooth={true}>Skills</Link></li>
        <li><Link to="contact" smooth={true}>Contact</Link></li>
        <li><RouterLink to="/blog" className="blog-link">Blog</RouterLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
