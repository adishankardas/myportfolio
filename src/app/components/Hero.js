"use client";
import React, { useState, useEffect } from'react';
import './Hero.css';
import PropTypes from 'prop-types';
const typingPhrases = [
  "Aspiring Software Engineer",
  "Full Stack Web Developer",
  "Cybersecurity Enthusiast",
  "1st Year Computer Science Student"
];
TypingEffect.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number,
  pause: PropTypes.number,
};
function TypingEffect({ phrases, speed = 80, pause = 1200 }) {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!deleting && charIdx < phrases[phraseIdx].length) {
      timeout = setTimeout(() => setCharIdx(charIdx + 1), speed);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(charIdx - 1), speed / 2);
    } else if (!deleting && charIdx === phrases[phraseIdx].length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIdx((phraseIdx + 1) % phrases.length);
      }, 400);
    }
    setText(phrases[phraseIdx].slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return <span>{text}<span className="typing-cursor">|</span></span>;
}

export default function Hero() {
    return (
        <section className="hero-section">
            <h1 className="hero-title">
                Hi, I&#39;m <span className="hero-name">Adi Shankar Das</span>
            </h1>
            <h2 className="hero-subtitle">
                <TypingEffect phrases={typingPhrases} />
            </h2>
            <p className="hero-description">
                I&#39;m dedicated to continually expanding my knowledge and skills as I grow into a proficient software engineer.
            </p>
            <div className="hero-buttons">
                <button className="hero-button resume-button">
                    Download Resume
                </button>     
                <button className="hero-button connect-button"> Let&apos;s Connect</button>
            </div>
            <a href="#about" className="scroll-down-arrow" aria-label="Scroll down">
                ↓
            </a>
        </section>
    );
}