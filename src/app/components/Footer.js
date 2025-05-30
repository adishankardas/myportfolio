import React from 'react';
import './Footer.css';

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
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#projects" className="footer-link">Projects</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
            <li><a href="/resume.pdf" className="footer-link">Resume</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h3 className="footer-title">Connect With Me</h3>
          <div className="footer-social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="mailto:your.email@example.com" className="footer-social-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Adi Shankar Das. All rights reserved.
        </p>
      </div>
    </footer>
  );
}