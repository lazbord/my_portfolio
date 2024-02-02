// ScrollBtn.js
import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollBtn.css';

function ScrollBtn() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const scrollThreshold = 200;

        if (scrollY > scrollThreshold) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop({ duration: 500 });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`scroll-btn ${isVisible ? 'visible' : ''}`}>
            <Link to="top" spy={true} smooth={true} duration={500}>
                <button onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            </Link>
        </div>
    );
}

export default ScrollBtn;
