import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import "./Work.css";

const Work = ({ resumeData }) => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.2 });

  const toggleExpand = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
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
    <section id="work" className="work-section">
      <motion.div
        ref={ref}
        className="work-container"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Work Experience
        </motion.h2>
        <div className="timeline">
          {resumeData.work.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <Briefcase size={20} />
              </div>
              <motion.div
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className="timeline-header"
                  onClick={() => toggleExpand(index)}
                >
                  <h4>{job.CompanyName}</h4>
                  <p className="work-position">{job.position}</p>
                  <p className="work-date">
                    {job.MonthOfStarting} {job.YearOfStarting} -{" "}
                    {job.MonthOfLeaving} {job.YearOfLeaving}
                  </p>
                  <motion.div className="chevron-icon">
                    {expandedJob === index ? <ChevronUp /> : <ChevronDown />}
                  </motion.div>
                </div>

                <motion.div
                  className="work-description-wrapper"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedJob === index ? "auto" : 0,
                    opacity: expandedJob === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ul className="work-description-list">
                    {job.description.map((point, i) => (
                      <li key={i} className="work-description-item">
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
