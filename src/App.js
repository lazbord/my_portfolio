import React from 'react';
import Navbar from './component/NavBar'; // Adjust the path accordingly
import AboutMe from './component/AboutMe';
import Skills from './component/Skills';

function App() {
    return (
        <div>
            <Navbar />
            <AboutMe/>
            <Skills/>
        </div>
    );
}

export default App;
