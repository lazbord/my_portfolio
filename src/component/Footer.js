import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="top-section">
                <h2>Contact Me</h2>
                <p>Student at the Ecole Supérieure d'Ingénieurs Léonard de Vinci in cybersecurity and connected objects, I am seeking an internship starting from April 2024 for a duration of 5 months.</p>
            </div>
            <div className="contact-info">
                <p>Email: lazare.bordereaux@edu.devinci.fr</p>
                <p>Phone: +33695882381</p>
                {/* Add more contact information as needed */}
            </div>
            <div className="bottom-section">
                <p>&copy; 2024 Lazare Bordereaux. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
