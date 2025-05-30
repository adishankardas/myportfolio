'use client';
import React from 'react';
import { MdEmail, MdLocationOn } from "react-icons/md";
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        Get in <span className="contact-title-highlight">Touch</span>
      </h2>
      <p className="contact-subtitle">
  Let&apos;s discuss your next project and collaborate.
      </p>
      <div className="contact-grid">
        {/* Left: Info */}
        <div className="contact-info">
<h3 className="contact-info-title">Let&apos;s Connect</h3>
          <p className="contact-info-desc">
  I&apos;m always excited to collaborate on new projects and challenges. Whether you have a specific project in mind or want to connect, I&apos;m here to help!
</p>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <span className="contact-info-icon"><MdEmail size={28} /></span>
              <div>
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">your.email@example.com</div>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="contact-info-icon"><MdLocationOn size={28} /></span>
              <div>
                <div className="contact-info-label">Location</div>
                <div className="contact-info-value">Your City, Country</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <div className="contact-form-row">
            <input type="text" placeholder="Your Name" className="contact-input" required />
            <input type="email" placeholder="Your Email" className="contact-input" required />
          </div>
          <input type="text" placeholder="Subject" className="contact-input" required />
          <textarea placeholder="Your Message" className="contact-textarea" required />
          <button type="submit" className="contact-submit">
            Send <span style={{marginLeft: 8}}>✈️</span>
          </button>
        </form>
      </div>
    </section>
  );
}