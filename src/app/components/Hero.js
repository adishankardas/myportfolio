"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <section className="hero-section">
      <motion.h1
        className="hero-title"
        initial={animationProps.initial}
        animate={animationProps.animate}
        transition={{ ...animationProps.transition, delay: 0 }}
      >
        Hi, I&apos;m <span className="hero-name">Adi Shankar Das</span>
      </motion.h1>
      <motion.h2
        className="hero-subtitle"
        initial={animationProps.initial}
        animate={animationProps.animate}
        transition={{ ...animationProps.transition, delay: 0.2 }}
      >
        <TypingEffect phrases={typingPhrases} />
      </motion.h2>
      <motion.p
        className="hero-description"
        initial={animationProps.initial}
        animate={animationProps.animate}
        transition={{ ...animationProps.transition, delay: 0.4 }}
      >
        I&apos;m dedicated to continually expanding my knowledge and skills as I grow into a proficient software engineer.
      </motion.p>
      <motion.div
        className="hero-buttons"
        initial={animationProps.initial}
        animate={animationProps.animate}
        transition={{ ...animationProps.transition, delay: 0.6 }}
      >
        <a
          href="/MyResume.pdf"
          download
          className="hero-button resume-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
        <button
          className="hero-button connect-button"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Let&apos;s Connect
        </button>
      </motion.div>
      <motion.a
        href="#about"
        className="scroll-down-arrow"
        aria-label="Scroll down"
        initial={animationProps.initial}
        animate={animationProps.animate}
        transition={{ ...animationProps.transition, delay: 0.8 }}
      >
        ↓
      </motion.a>
    </section>
  );
}