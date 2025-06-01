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
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
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
                        <div className="edu-details">Built responsive web applications using MERN Stack.

                            Created CMS tools that reduced content editing time by 70%.

                            Improved UI/UX, increasing user engagement by 40%.

                            Integrated secure authentication and RESTful APIs.</div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school"> Cybersecurity Analyst (Virtual Internship)
                        </div>
                        <div className="edu-degree">Tata Consultancy Services</div>
                        <div className="edu-year">March 2025 (1 Month)</div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Completed job simulation focused on Identity and Access Management (IAM).

                            Drafted documentation and presented access control strategies aligned with business needs.

                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Cybersecurity Analyst (Virtual Internship)
                        </div>
                        <div className="edu-degree">Mastercard </div>
                        <div className="edu-year">March 2025 (1 Month)

                        </div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Worked with the Security Awareness Team.

                            Helped detect phishing threats and create training content, improving awareness by 30%.

                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Cybersecurity Analyst (Virtual Internship)
                        </div>
                        <div className="edu-degree">ANZ </div>
                        <div className="edu-year">March – April 2025 (2 Months)

                        </div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Conducted risk analysis, data protection audits, and presented findings in simulations.

                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Cybersecurity Analyst (Virtual Internship)
                        </div>
                        <div className="edu-degree">AIG </div>
                        <div className="edu-year">March 2025 (1 Month)

                        </div>
                        <div className="edu-year">Virtual internship</div>
                        <div className="edu-details">Participated in Shields Up Simulation, detecting and analyzing simulated cyber threats.

                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Cybersecurity Analyst (Virtual Internship)
                        </div>
                        <div className="edu-degree">Telstra  </div>
                        <div className="edu-year">April – May 2025 (2 Months)



                        </div>
                        <div className="edu-year">Virtual internship</div>
                        <div className="edu-details">Assisted in network security monitoring and alert analysis during the internship simulation.



                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                        <div className="edu-school">Content Writer & Blogger

                        </div>
                        <div className="edu-degree">Marpu Foundation </div>
                        <div className="edu-year">Oct – Nov 2024 (2 Months)



                        </div>
                        <div className="edu-year">Virtual internship</div>
                        <div className="edu-details">Authored blog posts and campaign content, increasing reach by 25%.



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
                    <AnimatedSection className="education-card">
         <div className="edu-school">Google Cybersecurity Professional Certificate</div>
<div className="edu-degree">Coursera – Issued by Google</div>
<div className="edu-year">Issued Sep 2024</div>
<div className="edu-year">Credential ID GCP-5204-0458</div>
<div className="edu-details">Skills: Network Security · Threat Analysis · SIEM · Incident Response · Linux · Python · NIST · Digital Forensics</div>

                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                  <div className="edu-school">Career Essentials in Generative AI</div>
<div className="edu-degree">LinkedIn Learning – Issued by Microsoft</div>
<div className="edu-year">Issued Oct 2024</div>
<div className="edu-year">Credential ID AI-CE-8347</div>
<div className="edu-details">Skills: Generative AI · Prompt Engineering · Responsible AI · ChatGPT · Microsoft Azure AI</div>

                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                  <div className="edu-school">Cybersecurity Analyst Job Simulation</div>
<div className="edu-degree">Forage – In Collaboration with Tata Consultancy Services</div>
<div className="edu-year">Completed March 2025</div>
<div className="edu-year">Credential ID TCS-VSIM-0825</div>
<div className="edu-details">Skills: IAM · Cybersecurity Strategy · Risk Management · Access Control · Technical Documentation</div>

                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                  <div className="edu-school">Cybersecurity Virtual Internship</div>
<div className="edu-degree">Forage – In Collaboration with Mastercard</div>
<div className="edu-year">Completed March 2025</div>
<div className="edu-year">Credential ID MC-VEXP-7735</div>
<div className="edu-details">Skills: Security Awareness · Phishing Detection · Cybersecurity Training · Threat Reporting</div>

                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                  <div className="edu-school">Cybersecurity Analyst Virtual Internship</div>
<div className="edu-degree">Forage – In Collaboration with ANZ</div>
<div className="edu-year">Completed April 2025</div>
<div className="edu-year">Credential ID ANZ-9852-CSIM</div>
<div className="edu-details">Skills: Risk Analysis · Incident Response · Data Protection · Cyber Risk Presentation</div>

                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                  <div className="edu-school">Shields Up: Cybersecurity Analyst Internship</div>
<div className="edu-degree">Forage – In Collaboration with AIG</div>
<div className="edu-year">Completed March 2025</div>
<div className="edu-year">Credential ID AIG-SHIELD-4482</div>
<div className="edu-details">Skills: Breach Detection · Packet Analysis · Vulnerability Assessment · SIEM Investigation</div>

                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                  <div className="edu-school">Cybersecurity Analyst Virtual Internship</div>
<div className="edu-degree">Forage – In Collaboration with Telstra</div>
<div className="edu-year">Completed May 2025</div>
<div className="edu-year">Credential ID TEL-7861-CSIM</div>
<div className="edu-details">Skills: Network Monitoring · Alert Triage · Cybersecurity Tools · Real-time Threat Response</div>

                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                  <div className="edu-school">Front-End Web Development – CSS</div>
<div className="edu-degree">Coursera / LinkedIn Learning</div>
<div className="edu-year">Issued Aug 2023</div>
<div className="edu-year">Credential ID CSS-1211-FWD</div>
<div className="edu-details">Skills: HTML · CSS · Responsive Design · Flexbox · Grid · UI Styling</div>

                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                  <div className="edu-school">Assets, Threats, and Vulnerabilities</div>
<div className="edu-degree">Cybersecurity Essentials Program</div>
<div className="edu-year">Issued July 2024</div>
<div className="edu-year">Credential ID ATV-6293</div>
<div className="edu-details">Skills: Risk Identification · Vulnerability Management · Asset Classification · Security Policy Design</div>

                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                  <div className="edu-school">ChatGPT 101 – AI Usage & Prompt Engineering</div>
<div className="edu-degree">LinkedIn Learning / Self-Paced Course</div>
<div className="edu-year">Issued Oct 2024</div>
<div className="edu-year">Credential ID GPT-101-AI</div>
<div className="edu-details">Skills: Prompt Engineering · AI Chatbots · LLM Basics · AI Ethics · Automation</div>

                    </AnimatedSection>
                    <AnimatedSection className="education-card">
                  <div className="edu-school">Adobe Photoshop – Visual Design Basics</div>
<div className="edu-degree">Self-Learning / Online Design Course</div>
<div className="edu-year">Issued Sept 2024</div>
<div className="edu-year">Credential ID PS-DSGN-5402</div>
<div className="edu-details">Skills: Graphic Design · Photo Editing · Layers & Masking · Digital Composition · Branding Assets</div>

                  
                    </AnimatedSection>
                </div>
            </AnimatedSection>
        </section>
    );
}