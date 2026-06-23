import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from './BrandIcons.jsx';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="card-topline">
        <span className="project-badge">Featured</span>
        <span className="tiny-star">✦</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-subtitle">{project.subtitle}</p>
      <p className="project-description">{project.description}</p>
      <div className="tech-list">
        {project.tech.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer">
          <GitHubIcon size={17} /> Code
        </a>
        {project.demo ? (
          <a href={project.demo} target="_blank" rel="noreferrer">
            <ExternalLink size={17} /> Demo
          </a>
        ) : (
          <span className="coming-soon">Demo coming soon</span>
        )}
      </div>
    </motion.article>
  );
}
