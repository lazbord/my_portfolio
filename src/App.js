// App.js
import React from 'react';
import Navbar from './component/NavBar';
import AboutMe from './component/AboutMe';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Footer from './component/Footer';
import ScrollBtn from './component/ScrollBtn';

function App() {
    return (
        <div>
            <Navbar />
            <section id="about">
                <AboutMe />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="footer">
                <Footer />
            </section>
            <ScrollBtn />
        </div>
    );
}

export default App;
