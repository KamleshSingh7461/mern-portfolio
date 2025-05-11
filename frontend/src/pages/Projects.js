import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ParticlesComponent from '../components/ParticlesComponent'; // Background animation
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://kamlesh-portfolio.onrender.com/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects">
      <ParticlesComponent />

      <div className="projects-header">
        <h2 className="projects-title">My Works</h2>
        <p className="projects-subtitle">Here are some of the projects I've worked on.</p>
      </div>

      <div id="projects" className="projects-list">
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-card-content">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.techStack && Array.isArray(project.techStack) && (
                  <div className="project-tech-stack">
                    <strong>Tech Stack:</strong>
                    <ul>
                      {project.techStack.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
