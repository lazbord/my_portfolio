import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css';

function Navbar() {
    return (
        <header className="navbar">
            <div className="left-section">
                <h3>Lazare Bordereaux</h3>
                <nav className="nav-links">
                    <Link to="about" smooth={true} duration={500}>About me</Link>
                    <Link to="skills" smooth={true} duration={500}>Skills</Link>
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
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
