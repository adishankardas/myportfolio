'use client';
import React, { useState } from 'react';
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/adishankardas@gmail.com", {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    })
    .catch(error => console.error(error));
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="contact-title">Let&apos;s Build Something Great</h2>
        <p className="contact-subtitle">
          Let&apos;s discuss your next project and collaborate.
        </p>
      </motion.div>

      <div className="contact-grid">
        {/* Left Info */}
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
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <input type="hidden" name="_captcha" value="false" />

          <div className="contact-form-row">
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-input"
              required
              variants={fadeIn}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-input"
              required
              variants={fadeIn}
            />
          </div>
          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            className="contact-input"
            required
            variants={fadeIn}
          />
          <motion.textarea
            name="message"
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

          {submitted && (
            <motion.p
              className="contact-success-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ marginTop: "1rem", color: "#4ade80", textAlign: "center" }}
            >
               Message sent successfully!
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
