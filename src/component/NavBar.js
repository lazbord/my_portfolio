import React from 'react';
import './Navbar.css'; // Import your CSS file

function Navbar() {
    return (
        <header className="navbar">
            <div className="left-section">
                <h3>Lazare Bordereaux</h3>
                <nav className="nav-links">
                    <a href="#about">About me</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                </nav>
            </div>
            <div className="right-section">
                <a href="https://www.linkedin.com/in/lazare-bordereaux/" target="_blank" rel="noopener noreferrer">
                    <img src={require('../images/linkedin.png')} alt="LinkedIn Logo" className="logo"/>
                </a>
                <a href="https://github.com/lazbord" target="_blank" rel="noopener noreferrer">
                    <img src={require('../images/github.png')} alt="LinkedIn Logo" className="logo"/>
                </a>
            </div>
        </header>
    );
}

export default Navbar;
