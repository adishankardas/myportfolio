'use client';
import { useState, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (menuOpen) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  } [menuOpen]

        const onScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScroll(scrolled);
        };

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', checkMobile);
        checkMobile(); // Initial check
        
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const closeMenu = () => {
        if (isMobile) {
            setMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="scroll-progress-bar" style={{ width: `${scroll}%` }} />

            <div className="navbar-container">
                <div className="logo" href="#home">ADI</div>
                
                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
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
                    aria-label="Menu"
                >
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </nav>
    );
}