import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.css";

const About = ({ resumeData }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="about-section">
      <div className="about-background"></div>
      <motion.div
        ref={ref}
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="about-content" variants={itemVariants}>
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          <div className="about-grid">
            <motion.div className="about-text-content" variants={itemVariants}>
              <div className="about-description">
                <motion.p variants={itemVariants}>
                  {resumeData.aboutme}
                </motion.p>
                <motion.div className="tech-stack" variants={itemVariants}>
                  <h3>Technologies I work with:</h3>
                  <ul className="tech-list">
                    <li>JavaScript (ES6+)</li>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                    <li>Java</li>
                    <li>Docker</li>
                  </ul>
                </motion.div>
              </div>
              <motion.div className="education-section" variants={itemVariants}>
                <h3>Education</h3>
                <div className="education-timeline">
                  {resumeData.education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="education-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="education-date">
                        {edu.MonthOfPassing} {edu.YearOfPassing}
                      </div>
                      <div className="education-content">
                        <h4>{edu.UniversityName}</h4>
                        <p>{edu.specialization}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            <motion.div className="about-image-section" variants={itemVariants}>
              <div className="image-frame">
                <div className="image-wrapper">
                  <img
                    src="portfolio/images/Parth.jpg"
                    alt="Parth Lakhani"
                    className="profile-img"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
