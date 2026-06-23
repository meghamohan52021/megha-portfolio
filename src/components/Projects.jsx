import { useMemo, useState } from 'react';
import { projects, projectFilters } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projects;
    }

    return projects.filter((project) =>
      project.filters?.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="projects section-shell">
      <div className="section-heading centered">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
        <p>
          A selection of projects I’ve built to explore new technologies, solve problems and improve my skills. Each project is a learning experience, and I enjoy experimenting with different approaches to create practical and effective solutions.
        </p>
      </div>

      <div className="project-filter-bar">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={activeFilter === filter ? 'active' : ''}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <p className="project-count">
        Showing {filteredProjects.length}{' '}
        {filteredProjects.length === 1 ? 'project' : 'projects'}
        {activeFilter !== 'All' ? ` for ${activeFilter}` : ''}
      </p>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}