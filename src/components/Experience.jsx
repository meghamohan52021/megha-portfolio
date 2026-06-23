import { motion } from 'framer-motion';
import { Sparkles, BriefcaseBusiness } from 'lucide-react';
import { experiences } from '../data/experience';

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <span className="eyebrow">experience</span>
        <h2>Experience that shaped how I build.</h2>
        <p>
          Each experience has contributed to my growth as a developer, and I value the lessons learned from each opportunity.
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((item, index) => (
          <motion.article
            className="experience-card"
            key={`${item.role}-${item.company}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="experience-icon">
              <BriefcaseBusiness size={18} />
            </div>

            <div className="experience-content">
              <div className="experience-top">
                <div>
                  <span className="experience-type">{item.type}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <span className="experience-period">{item.period}</span>
              </div>

              <p className="experience-description">{item.description}</p>

              <ul className="experience-highlights">
                {item.highlights.map((point) => (
                  <li key={point}>
                    <Sparkles size={14} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="experience-tech">
                {item.tech.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;