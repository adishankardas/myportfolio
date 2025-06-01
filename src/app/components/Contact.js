'use client';
import React from 'react';
import { MdEmail, MdLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import './Contact.css';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="contact-title">Let&apos;s Build Something Great
</h2>
        <p className="contact-subtitle">
          Let&apos;s discuss your next project and collaborate.
        </p>
      </motion.div>

      <div className="contact-grid">
        {/* Left: Info */}
        <motion.div 
          className="contact-info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
          variants={fadeIn}
          transition={{ delay: 0.1 }}
        >
          <h3 className="contact-info-title">Let&apos;s Connect</h3>
          <p className="contact-info-desc">
            I&apos;m always excited to collaborate on new projects and challenges. Whether you have a specific project in mind or want to connect, I&apos;m here to help!
          </p>
          <div className="contact-info-list">
            {[
              {
                icon: <MdEmail size={28} />,
                label: "Email",
                value: "adishankardas@gmail.com"
              },
              {
                icon: <MdLocationOn size={28} />,
                label: "Location",
                value: "India"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="contact-info-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 + (index * 0.1) }}
              >
                <span className="contact-info-icon">{item.icon}</span>
                <div>
                  <div className="contact-info-label">{item.label}</div>
                  <div className="contact-info-value">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          className="contact-form"
          onSubmit={e => e.preventDefault()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <div className="contact-form-row">
            <motion.input
              type="text"
              placeholder="Your Name"
              className="contact-input"
              required
              variants={fadeIn}
            />
            <motion.input
              type="email"
              placeholder="Your Email"
              className="contact-input"
              required
              variants={fadeIn}
            />
          </div>
          <motion.input
            type="text"
            placeholder="Subject"
            className="contact-input"
            required
            variants={fadeIn}
          />
          <motion.textarea
            placeholder="Your Message"
            className="contact-textarea"
            required
            variants={fadeIn}
          />
          <motion.button
            type="submit"
            className="contact-submit"
            variants={fadeIn}
          >
            Send <span style={{ marginLeft: 8 }}>✈️</span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}