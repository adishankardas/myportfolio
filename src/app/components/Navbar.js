'use client';
import { useState, useEffect } from 'react';
import './Navbar.css'; // We'll define styles here or in globals.css if you prefer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScroll(scrolled);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (

        <nav className="navbar">
            <div className="scroll-progress-bar" style={{ width: `${scroll}%` }} />

            <div className="navbar-container">
                <div className="logo" href="#home">ADI</div>
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="social-icons">
                    <a href="https://instagram.com/adi_shankar_das" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://linkedin.com/in/adishankardas" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/adishankardas" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="mailto:adishankardas@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>

                <div
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span />
                    <span />
                    <span />
                </div>

            </div>
        </nav>
    );
}
