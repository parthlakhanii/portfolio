import React from "react";
import { motion } from "framer-motion";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./Home.css";

const Home = ({ resumeData }) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#58a6ff",
      },
      links: {
        enable: true,
        color: "#58a6ff",
        opacity: 0.2,
        distance: 150,
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: "bounce",
      },
      size: {
        value: 3,
        random: true,
      },
      opacity: {
        value: 0.5,
        random: true,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
        },
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
    <section className="home">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="particles"
      />
      <motion.div
        className="home-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>Hi, I'm {resumeData.name}</motion.h1>
        <motion.h2 variants={itemVariants}>{resumeData.role}</motion.h2>
        <motion.p variants={itemVariants}>
          {resumeData.roleDescription}
        </motion.p>
        <motion.div className="home-buttons" variants={itemVariants}>
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

export default Home;
