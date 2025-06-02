import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* About Me Section */}
        <div className="footer-about">
          <h3 className="footer-title">Adi Shankar Das</h3>
          <p className="footer-text">
            A passionate software engineer dedicated to building impactful solutions and continuously learning new technologies.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links-list">
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#projects" className="footer-link">Projects</a></li>
            <li><a href="#skills" className="footer-link">Skills</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h3 className="footer-title">Connect With Me</h3>
          <div className="footer-social-icons">
            <a href="https://github.com/adishankardas" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/adishankardas" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/adishankardas" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://instagram.com/adi_shankar_das" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="mailto:adishankardas@gmail.com" className="footer-social-link" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Built with ❤️ by Adi Shankar Das. All rights reserved.
        </p>
      </div>
    </footer>
  );
}