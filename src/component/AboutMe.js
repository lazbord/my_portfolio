import './AboutMe.css'; // Import your CSS file

import React from 'react';

const AboutMe = () => {
    return (
        <div className="main-content">
            <div className="profile-photo">
                <img src={require('../images/lazare.png')} alt="Your Photo" />
            </div>
            <div className="profile-description">
                <h2>Lazare Bordereaux</h2>
                <p>
                    Cybersecurity student at ESILV Paris la Défense.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
