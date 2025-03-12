import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Skills.css";
import { text } from "framer-motion/client";

const Skills = ({ resumeData }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <section id="skills" className="skills-section">
      <motion.div
        ref={ref}
        className="skills-container"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="skills-grid">
          {Object.entries(resumeData.skills).map(([category, skills], idx) => (
            <motion.div
              key={category}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            >
              <h3>{category}</h3>
              <ul className="skill-list">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <i className={skill.icon}></i>
                    {skill.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
