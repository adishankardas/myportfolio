'use client';
import { MdSchool, MdWork, MdVerified } from "react-icons/md"; 
import './About.css';
import { SlBadge } from "react-icons/sl";
import React from 'react';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="about-title">About Me</h2>
                <p className="about-description">
                    Hello! I&#39;m Rohan, a passionate self-taught full-stack web developer and cybersecurity enthusiast from Chhattisgarh, India.
                    I specialize in building responsive, fast, and user-friendly websites using modern technologies like React, Next.js, Node.js, and MongoDB.
                </p>
                <p className="about-description">
                    With a strong foundation in Python, cybersecurity, and creative problem-solving, I&#39;m aiming to build meaningful digital experiences.
                    I&#39;m currently preparing for my Bachelor&#39;s in Computer Science and actively learning new technologies to contribute to open-source projects and global internships like GSoC.
                </p>
                <p className="about-description">
                    Outside of tech, I&#39;m deeply into martial arts and fitness. I believe in an "eagle mindset" — keep flying higher, no matter the storm.
                </p>
            </div>
            <div className="education">
                <h2 className="education-title">
                    <MdSchool style={{ verticalAlign: "middle", marginRight: "0.5rem", color: "#ff3589" }} />
                    Education
                </h2>
                <div className="education-details">
                     <div className="education-card">
                        <div className="edu-school">XYZ University</div>
                        <div className="edu-degree">B.Sc. (Hons) Computer Science</div>
                        <div className="edu-year">2025 – 2028 (Expected)</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </div>
                    <div className="education-card">
                        <div className="edu-school">St. Vincent Pallotti School</div>
                        <div className="edu-degree">High School</div>
                        <div className="edu-year">2024</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </div>
                </div>
            </div>
            <div className="education">
                <h2 className="education-title">
                    <MdWork style={{ verticalAlign: "middle", marginRight: "0.5rem", color: "#ff3589" }} />
                    Experience
                </h2>
                <div className="education-details">
                     <div className="education-card">
                        <div className="edu-school">Full Stack Web Developer</div>
                        <div className="edu-degree">AstroShine</div>
                        <div className="edu-year">June 2022 - Present</div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </div>
                    <div className="education-card">
                        <div className="edu-school">Cyber Security Analyst Virtual Intern</div>
                        <div className="edu-degree">ANZ Internship</div>
                        <div className="edu-year">March 2025 - April 2025</div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </div>
                    <div className="education-card">
                        <div className="edu-school">Cyber Security Analyst Virtual Intern</div>
                        <div className="edu-degree">ANZ Internship</div>
                        <div className="edu-year">March 2025 - April 2025</div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </div>
                    <div className="education-card">
                        <div className="edu-school">Cyber Security Analyst Virtual Intern</div>
                        <div className="edu-degree">ANZ Internship</div>
                        <div className="edu-year">March 2025 - April 2025</div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </div>
                    <div className="education-card">
                        <div className="edu-school">Cyber Security Analyst Virtual Intern</div>
                        <div className="edu-degree">ANZ Internship</div>
                        <div className="edu-year">March 2025 - April 2025</div>
                        <div className="edu-year">Remote</div>
                        <div className="edu-details">Here&#39;s how you can structure your education card to look like the LinkedIn style in your screenshot, including an icon, school name, degree, dates, description, and skills.</div>
                    </div>
                </div>
            </div>
            <div className="education">
                <h2 className="education-title">
                    <SlBadge style={{ verticalAlign: "middle", marginRight: "0.5rem", color: "#ff3589" }} />
                    Certifications
                </h2>
                <div className="education-details">
                    <div className="education-card">
                        <div className="edu-school">Web Development</div>
                        <div className="edu-degree">Internshala</div>
                        <div className="edu-year">Issued Sep 2024</div>
                        <div className="edu-year">Credential ID 5e025m83ayk</div>
                        <div className="edu-details">Skills: Web Development · HTML · Cascading Style Sheets (CSS) · JavaScript · DBMS · React · MySQL · PHP · AI in Web Development</div>
                    </div>
                    <div className="education-card">
                        <div className="edu-school">Web Development</div>
                        <div className="edu-degree">Internshala</div>
                        <div className="edu-year">Issued Sep 2024</div>
                        <div className="edu-year">Credential ID 5e025m83ayk</div>
                        <div className="edu-details">Skills: Web Development · HTML · Cascading Style Sheets (CSS) · JavaScript · DBMS · React · MySQL · PHP · AI in Web Development</div>
                    </div>
                </div>
            </div>
        </section>
    );
}