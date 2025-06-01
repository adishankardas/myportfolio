'use client';
import { MdSchool, MdWork } from "react-icons/md";
import './About.css';
import { SlBadge } from "react-icons/sl";
import { motion } from "framer-motion";
import React from 'react';
import PropTypes from 'prop-types';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const AnimatedSection = ({ children, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
    variants={fadeIn}
    className={className}
  >
    {children}
  </motion.div>
);

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default function About() {
    return (
        <section id="about" className="about-section">
            <AnimatedSection className="about-container">
              <motion.h2 className="about-title" variants={fadeIn}>
  <span className="about-title-main">About&nbsp;</span>{' '}
  <span className="about-title-highlight">Me</span>
</motion.h2>
                <motion.p className="about-description" variants={fadeIn}>
                    Hello! I&apos;m Rohan, a passionate self-taught full-stack web developer and cybersecurity enthusiast from Chhattisgarh, India.
                </motion.p>
                <motion.p className="about-description" variants={fadeIn}>
                    With a strong foundation in Python, cybersecurity, and creative problem-solving, I&apos;m aiming to build meaningful digital experiences.
                    I&apos;m currently preparing for my Bachelor&apos;s in Computer Science...
                </motion.p>
                <motion.p className="about-description" variants={fadeIn}>
                    Outside of tech, I&apos;m deeply into martial arts and fitness. I believe in an &quot;eagle mindset&quot; — keep flying higher, no matter the storm.
                </motion.p>
            </AnimatedSection>
            
            <AnimatedSection className="education">
                <motion.h2 className="education-title" variants={fadeIn}>
                    <MdSchool style={{ verticalAlign: "middle", marginRight: "0.5rem", color: "var(--colortheme)" }} />
                    Education
                </motion.h2>
                <div className="education-details">
                    <AnimatedSection className="education-card">
                        <div className="edu-school">XYZ University</div>
                        <div className="edu-degree">B.Sc. (Hons) Computer Science</div>
                        <div className="edu-year">2025 – 2028 (Expected)</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">St. Vincent Pallotti School</div>
                        <div className="edu-degree">High School</div>
                        <div className="edu-year">2024</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </AnimatedSection>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="education">
                <motion.h2 className="education-title" variants={fadeIn}>
                    <MdWork style={{ verticalAlign: "middle", marginRight: "0.5rem", color: "var(--colortheme)" }} />
                    Experience
                </motion.h2>
                <div className="education-details">
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Full Stack Web Developer</div>
                        <div className="edu-degree">AstroShine</div>
                        <div className="edu-year">June 2022 - Present</div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Cyber Security Analyst Virtual Intern</div>
                        <div className="edu-degree">ANZ Internship</div>
                        <div className="edu-year">March 2025 - April 2025</div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Cyber Security Analyst Virtual Intern</div>
                        <div className="edu-degree">ANZ Internship</div>
                        <div className="edu-year">March 2025 - April 2025</div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Cyber Security Analyst Virtual Intern</div>
                        <div className="edu-degree">ANZ Internship</div>
                        <div className="edu-year">March 2025 - April 2025</div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Cyber Security Analyst Virtual Intern</div>
                        <div className="edu-degree">ANZ Internship</div>
                        <div className="edu-year">March 2025 - April 2025</div>
                        <div className="edu-year">Remote internship</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </AnimatedSection>
                </div>
            </AnimatedSection>
            
            <AnimatedSection className="education">
                <motion.h2 className="education-title" variants={fadeIn}>
                    <SlBadge style={{ verticalAlign: "middle", marginRight: "0.5rem", color: "var(--colortheme)" }} />
                    Certifications
                </motion.h2>
                <div className="education-details">
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Web Development</div>
                        <div className="edu-degree">Internshala</div>
                        <div className="edu-year">Issued Sep 2024</div>
                        <div className="edu-year">Credential ID 5e025m83ayk</div>
                        <div className="edu-details">Skills: Web Development · HTML · Cascading Style Sheets (CSS) · JavaScript · DBMS · React · MySQL · PHP · AI in Web Development</div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Web Development</div>
                        <div className="edu-degree">Internshala</div>
                        <div className="edu-year">Issued Sep 2024</div>
                        <div className="edu-year">Credential ID 5e025m83ayk</div>
                        <div className="edu-details">Skills: Web Development · HTML · Cascading Style Sheets (CSS) · JavaScript · DBMS · React · MySQL · PHP · AI in Web Development</div>
                    </AnimatedSection>
                </div>
            </AnimatedSection>
        </section>
    );
}