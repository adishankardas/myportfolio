'use client';
import { MdSchool, MdWork } from "react-icons/md";
import './About.css';
import { SlBadge } from "react-icons/sl";
import { motion } from "framer-motion";
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};
const certifications = [
    {
        id: 1,
        title: "Google Cybersecurity Professional Certificate",
        issuer: "Google",
        date: "Issued Mar 2025",
        credential: "",
        details: "Skills: Threat & Vulnerability Management · Incident Response · Linux · SQL · SIEM · Security Frameworks · Python",
        image: "/certificates/google-cyber.png"
    },
    {
        id: 2,
        title: "Introduction to Generative AI",
        issuer: "Google Cloud Skills Boost",
        date: "Issued Apr 2025",
        credential: "Credential ID 14529349",
        details: "Skills: Generative AI · AI Fundamentals · Google Cloud AI",
        image: "/certificates/google_Ai.png"
    },
    {
        id: 3,
        title: "Career Essentials in Generative AI",
        issuer: "Microsoft and LinkedIn",
        date: "Issued Aug 2024",
        credential: "",
        details: "Skills: Artificial Intelligence (AI) · Generative AI · Machine Learning",
        image: "/certificates/generative- ai-microsoft.png"
    },
    {
        id: 4,
        title: "ChatGPT 101",
        issuer: "Simplilearn",
        date: "Issued Jul 2024",
        credential: "Credential ID 6875123",
        details: "Skills: ChatGPT · Prompt Engineering · Responsible AI · AI Basics",
        image: "/certificates/chatgpt.png"
    },
    {
        id: 5,
        title: "Web Development",
        issuer: "Internshala",
        date: "Issued Sep 2024",
        credential: "Credential ID 5e025m83ayk",
        details: "Skills: Web Development · HTML · CSS · JavaScript · React · MySQL · PHP · DBMS · AI in Web Dev",
        image: "/certificates/web-develop.png"
    },
    {
        id: 6,
        title: "German Language A1",
        issuer: "Udemy",
        date: "Issued Aug 2024",
        credential: "",
        details: "Skills: German · Deutsch · A1 Certification · Language Basics",
        image: "/certificates/germana1.png"
    },
];

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
    const [selectedCertificate, setSelectedCertificate] = React.useState(null);

    // Handler for clicking a certificate image
    const handleCertificateClick = (image) => {
        setSelectedCertificate(image);
    };

    const closeCertificate = () => {
        setSelectedCertificate(null);
    };

    return (
        <section id="about" className="about-section">
            <AnimatedSection className="about-container">
                <motion.h2 className="about-title" variants={fadeIn}>
                    <span className="about-title-main">About&nbsp;</span>{' '}
                    <span className="about-title-highlight">Me</span>
                </motion.h2>
                <motion.p className="about-description" variants={fadeIn}>
                    Hey there! I&apos;m Adi Shankar Das — a passionate Cybersecurity Analyst and Full-Stack Web Developer who thrives at the intersection of security, innovation, and code. With certifications from Google and Microsoft, and hands-on experience in virtual roles at TCS, Mastercard, ANZ, and AIG, I&apos;ve immersed myself in threat detection, network defense, and incident response.
                </motion.p>
                <motion.p className="about-description" variants={fadeIn}>
                    I began my journey building full-stack applications and later ventured into the world of cybersecurity, where I now specialize in penetration testing, SIEM tools, and vulnerability assessment. I&apos;m equally comfortable writing Python scripts for automation as I am analyzing failed login logs in SQL or tightening IAM policies using NIST frameworks.
                </motion.p>
                <motion.p className="about-description" variants={fadeIn}>
                    Beyond tech, I enjoy content creation, AI experimentation, and community-building through blogging and open-source projects. I also speak three languages — English, Hindi, and German — and believe in lifelong learning.
                </motion.p>
                <motion.p className="about-description" variants={fadeIn}>
                    If you&apos;re into cybersecurity, AI, ethical hacking, or full-stack dev, let&apos;s connect and grow together. I&apos;m always open to collaborations, internships, or mentorships.
                </motion.p>
                <motion.p className="about-description" variants={fadeIn}>

                    📩 Let’s talk tech, security, and future possibilities!
                </motion.p>
            </AnimatedSection>

            <AnimatedSection className="education">
                <motion.h2 className="education-title" variants={fadeIn}>
                    <MdSchool style={{ verticalAlign: "middle", marginRight: "0.5rem", color: "var(--colortheme)" }} />
                    Education
                </motion.h2>
                <div className="education-details">
                    <AnimatedSection className="education-card">
                        <div className="edu-school"> To be finalized</div>
                        <div className="edu-degree">B.Sc. (Hons) Computer Science</div>
                        <div className="edu-year">2025 – 2028 (Expected)</div>
                        <div className="edu-details"> Starting a Bachelors (Hons) in Computer Science Building expertise in Cybersecurity, algorithms, databases, and Web Development to drive innovation in tech.</div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">St. Vincent Pallotti School</div>
                        <div className="edu-degree">Class 12th – CBSE (2023–2024)</div>
                        <div className="edu-year">2024</div>
                        <div className="edu-details">Relevent Subjects are Physics, Chemistry, English, Science, Mathematics

                        </div>
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
    <div className="edu-details">
        <ul>
            <li>Developed and optimized dynamic web applications using <strong>HTML, CSS, JavaScript, PHP, and MySQL</strong>.</li>
            <li>Designed CMS tools, reducing content editing time by <strong>70%</strong>.</li>
            <li>Improved UI/UX, increasing user engagement by <strong>40%</strong>.</li>
            <li>Implemented secure authentication and database management for optimized performance.</li>
        </ul>
    </div>
</AnimatedSection>

                    <AnimatedSection className="education-card">
                        <div className="edu-school">Cybersecurity Analyst (Virtual Internships)</div>
                        <div className="edu-degree">Various Companies (TCS, Mastercard, ANZ, AIG, Telstra, Deloitte)</div>
                        <div className="edu-year">March – May 2025</div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">
                            <ul>
                                <li>Conducted <strong>risk analysis</strong> and <strong>data protection audits</strong> in simulated environments.</li>
                                <li>Assisted in <strong>network security monitoring</strong> and <strong>alert analysis</strong> at Telstra.</li>
                                <li>Completed <strong>Identity and Access Management (IAM)</strong> job simulation at TCS.</li>
                                <li>Helped detect <strong>phishing threats</strong> and designed security awareness content at Mastercard <em>(improving awareness by 30%)</em>.</li>
                                <li>Participated in <strong>Shields Up Simulation</strong>, identifying and analyzing cyber threats at AIG.</li>
                                <li>Explored real-world <strong>cybersecurity operations and incident response</strong>  in a Deloitte job simulation via Forage.

</li>
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </AnimatedSection>

            <AnimatedSection className="education">
                <motion.h2 className="education-title" variants={fadeIn}>
                    <SlBadge style={{ verticalAlign: "middle", marginRight: "0.5rem", color: "var(--colortheme)" }} />
                    Certifications
                </motion.h2>
                <div className="education-details">
                    {certifications.map((cert) => (
                        <AnimatedSection key={cert.id} className="education-card">
                            <div className="certification-container">
                                <div className="certification-image-container" onClick={() => handleCertificateClick(cert.image)}>
                                    <Image
                                        src={cert.image}
                                        alt={`${cert.title} Certificate`}
                                        width={200}
                                        height={150}
                                        className="certification-thumbnail"
                                    />
                                    <div className="image-overlay-text">Click to View</div>
                                </div>
                                <div className="certification-content">
                                    <div className="edu-school">{cert.title}</div>
                                    <div className="edu-degree">{cert.issuer}</div>
                                    <div className="edu-year">{cert.date}</div>
                                    <div className="edu-year">{cert.credential}</div>
                                    <div className="edu-details">{cert.details}</div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </AnimatedSection>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div className="certificate-modal" onClick={closeCertificate}>
                    <div className="modal-content">
                        <Image
                            src={selectedCertificate}
                            alt="Certificate"
                            width={800}
                            height={600}
                            className="certificate-full-image"
                        />
                        <button
                            className="modal-close-button"
                            onClick={() => setSelectedCertificate(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}