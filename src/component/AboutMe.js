// AboutMe.js
import React from 'react';
import { Link } from 'react-scroll';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="main-content">
            <div className="profile-photo">
                <img src={require('../images/lazare.png')} alt="Your Photo" />
            </div>
            <div className="profile-description">
                <p>Welcome to my portfolio</p>
                <h2>Hi! I'm Lazare Bordereaux</h2>
                <p>
                    Student at ESILV since 2020, I have recently specialized in cybersecurity.
                    Simultaneously, I am self-learning programmer, constantly seeking to enhance my skills and knowledge.
                </p>
                <Link
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <button>Contact Me</button>
                </Link>
            </div>
        </div>
    );
}

export default AboutMe;
