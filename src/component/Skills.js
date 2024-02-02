import React from 'react';
import './Skills.css';

function Skills() {
    return (
        <div>
            <h2 className="skills-heading">Skills</h2>
            <div className="skills-container">
                <div className="skill">
                    <img src={require('../images/javascript.png')} alt="JavaScript Logo"/>
                    <p>JavaScript</p>
                </div>
                <div className="skill">
                    <img src={require('../images/NodeJs.png')} alt="Node.js Logo"/>
                    <p>Node.js</p>
                </div>
                <div className="skill">
                    <img src={require('../images/react.png')} alt="React Logo"/>
                    <p>React</p>
                </div>
                <div className="skill">
                    <img src={require('../images/html.png')} alt="HTML logo"/>
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <img src={require('../images/css.png')} alt="CSS logo"/>
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <img src={require('../images/python.png')} alt="Python logo"/>
                    <p>Python</p>
                </div>
                <div className="skill">
                    <img src={require('../images/csharp.png')} alt="C# logo"/>
                    <p>C#</p>
                </div>
                <div className="skill">
                    <img src={require('../images/sql.png')} alt="SQL logo"/>
                    <p>SQL</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;
