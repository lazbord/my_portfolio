import React from 'react';
import './AboutMe.css';

function AboutMe() {
    return (
        <div className="main-content">
            <div className="profile-photo">
                <img src={require('../images/lazare.png')} alt="Your Photo"/>
            </div>
            <div className="profile-description">
                <p>Welcome to my portfolio</p>
                <h2>Hi ! I'm Lazare Bordereaux</h2>
                <p>
                    Student at ESILV since 2020, I have recently specialized in cybersecurity.
                    Simultaneously, I am self-learning programmer, constantly seeking to enhance my skills and knowledge.
                </p>
                <button>Contact Me</button>
            </div>
        </div>
    );
}

export default AboutMe;