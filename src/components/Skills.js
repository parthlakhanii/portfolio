import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Skills.css";

const Skills = ({ resumeData }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills-content"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Technologies
          </motion.h2>

          <div className="skills-grid">
            {Object.entries(resumeData.skills).map(
              ([category, skills], idx) => (
                <motion.div
                  key={category}
                  className="skill-category card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="category-header">
                    <h3>{category}</h3>
                    <div className="category-icon">
                      <i className={skills[0]?.icon || "fas fa-code"}></i>
                    </div>
                  </div>

                  <div className="skills-list">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        className="skill-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          inView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + idx * 0.1 + index * 0.05,
                        }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        style={{
                          borderColor: skill.color || "var(--primary)",
                        }}
                      >
                        <i
                          className={skill.icon}
                          style={{ color: skill.color || "var(--primary)" }}
                        ></i>
                        <span>{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
