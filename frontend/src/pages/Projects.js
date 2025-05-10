// src/pages/Projects.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure axios is installed
import ParticlesComponent from '../components/ParticlesComponent'; // ✅ Import the background animation
import './Projects.css';

const Projects = () => {
  // State to store the fetched projects
  const [projects, setProjects] = useState([]);

  // Fetch projects data from the backend API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data); // Set projects data to state
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects(); // Call the function to fetch data
  }, []); // Empty dependency array means it will run once when the component mounts

  return (
    <div className="projects">
      <ParticlesComponent /> {/* ✅ Add background particles */}

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

                <div className="project-tech-stack">
                  <strong>Tech Stack:</strong>
                  <ul>
                    {project.techStack.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
