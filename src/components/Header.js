import React from 'react';
import '../styles/Header.css';
import cloudsImg from './Images/clouds.png';

function Header() {
  return (
    <header className="header">
      <div className="header-filter"></div>
      <div className="header-content">
        <div className="title-brand">
          <h1 className="presentation-title">Gabriel Esquivel</h1>
        </div>
        <p className="presentation-subtitle">Backend Software Engineer</p>
      </div>
      <div
        className="moving-clouds"
        style={{ backgroundImage: `url(${cloudsImg})` }}
      ></div>
    </header>
  );
}

export default Header;
