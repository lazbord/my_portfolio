// Projects.js

import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="color-container">
            <div className="projects-container">
                <h2>Projects</h2>
                <div className="project">
                    <div className="project-info">
                        <h3>PI² : Project of research</h3>
                        <p>Within the academic framework of the pi² project, we collaborated with the company Cybershen
                            to develop a chrome extension aimed at real-time detection of malicious activities and risky
                            behaviors in the browser.
                            In this project, my responsibility was to address the issue of "user password reuse,"
                            specifically to prevent an employee from compromising the confidentiality of a company by
                            reusing a personal password at work.
                            You can track the project progress by clicking on the button below.
                        </p>
                        <a href="https://github.com/Tyui70/2023-PI" target="_blank" rel="noopener noreferrer">
                            <button>Github repository</button>
                        </a>
                    </div>
                    <img src={require('../images/cybershen.jpg')} alt="Project 1"/>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h3>Discord Bot</h3>
                        <p>I've personally developed this bot to streamline tasks in my daily routine.
                            From accessing my school portal and fetching assignments to receiving important emails, this bot serves as a versatile assistant.
                            Itt also provides real-time updates on my hobbies, like League of Legends API, Formula 1, or Twitter.
                            Hosted on my Raspberry Pi 3, it's available 24/7 for continuous support and functionality.
                            This project is currently in progress and isn't accessible to the public due to privacy reasons.
                        </p>
                        <a href="https://github.com/lazbord/Discord_Bot" target="_blank" rel="noopener noreferrer">
                            <button>Github repository (private)</button>
                        </a>
                    </div>
                    <img src={require('../images/discord.jpg')} alt="Project 1"/>
                </div>
                <div className="project">
                    <div className="project-info">
                        <h3>AcademEase</h3>
                        <p>Academease, a C# WPF app created for a software engineering project, supports high school students in exploring future academic paths.
                            Beyond coding, the project immersed us in real-world development using agile methodology and Jira.
                            Focused on reports, teamwork, and incremental innovation, it fueled my passion for development.
                        </p>
                        <a href="https://github.com/lazbord/AcademEase" target="_blank" rel="noopener noreferrer">
                            <button>Github repository</button>
                        </a>
                    </div>
                    <img src={require('../images/academease.png')} alt="Project 1"/>
                </div>
            </div>

        </div>
    );
}

export default Projects;
