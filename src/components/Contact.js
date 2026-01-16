import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = ({ resumeData }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email_from: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("N1EPqeKu6RxP3RdMg");
  }, []);

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "service_wmx951j",
        "template_email",
        form.current,
        "N1EPqeKu6RxP3RdMg"
      );

      setStatus({
        type: "success",
        message: "Thank you! I'll get back to you soon.",
      });
      setFormData({ name: "", email_from: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background"></div>
      <motion.div
        ref={ref}
        className="contact-container"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Let's talk about everything!</h3>
            <p>Don't like forms? Send me an email. 👋</p>
            <div className="contact-details">
              <motion.div
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-envelope"></i>
                <span>{resumeData.email}</span>
              </motion.div>
              <motion.div
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-phone"></i>
                <span>{resumeData.phone}</span>
              </motion.div>
              <motion.div
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <span>{resumeData.address}</span>
              </motion.div>
              <motion.a
                href="https://calendly.com/pmlakhani55/coffee-chat"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className="fas fa-calendar-alt"></i>
                <span>Book a Meeting</span>
              </motion.a>
            </div>
            <div className="social-links">
              {resumeData.socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={social.className}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.form
            ref={form}
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email_from"
                value={formData.email_from}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message here..."
              ></textarea>
            </div>
            {status.message && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
