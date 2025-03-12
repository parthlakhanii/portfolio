import React from "react";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./Hero.css";

const Hero = ({ resumeData }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#594545",
      },
      links: {
        enable: true,
        color: "#594545",
        opacity: 0.3,
      },
      move: {
        enable: true,
        speed: 2,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="particles"
      />
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Hi, I'm{" "}
          <motion.span
            className="highlight"
            whileHover={{
              scale: 1.1,
              color: ["#9E8B8E", "#B4A69B", "#9E8B8E"],
              transition: { duration: 0.5, repeat: Infinity },
            }}
          >
            {resumeData.name}
          </motion.span>
        </motion.h1>
        <motion.h2 variants={itemVariants}>{resumeData.role}</motion.h2>
        <motion.p variants={itemVariants}>
          {resumeData.roleDescription}
        </motion.p>
        <motion.div className="hero-buttons" variants={itemVariants}>
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
        <motion.div className="social-links" variants={itemVariants}>
          {resumeData.socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.3 },
              }}
            >
              <i className={social.className}></i>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
