import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { skills, certifications } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="skills section-shell">
      <div className="section-heading centered">
        <p className="eyebrow">Skills</p>
        <h2>Tech I work with</h2>
        <p>
          A selection of technologies I’ve used in coursework, personal projects and professional experience.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((group, index) => (
          <motion.div
            className="skill-card"
            key={group.category}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <h3>{group.category}</h3>

            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          className="skill-card certification-skill-card"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, delay: skills.length * 0.05 }}
          whileHover={{ y: -5 }}
        >
          <h3>Certifications</h3>

          <div className="cert-list">
            {certifications.map((cert) => (
              <a
                className="cert-mini-card"
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                key={cert.title}
              >
                <span className="cert-icon">
                  <Award size={16} />
                </span>

                <span className="cert-text">
                  <strong>{cert.title}</strong>
                  <small>{cert.issued}</small>
                </span>

                <ExternalLink size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}