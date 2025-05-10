import React from 'react';
import ProjectCard from './components/ProjectCard';
import { Grid } from '@mui/material';

const fakeProjects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with the latest web technologies, showcasing all my projects and skills.',
    image: 'https://via.placeholder.com/400x200/ff512f/ffffff?text=Project+1', // Placeholder image
  },
  {
    title: 'E-Commerce App',
    description: 'A fully-functional e-commerce application with shopping cart functionality, product filtering, and more.',
    image: 'https://via.placeholder.com/400x200/0072ff/ffffff?text=Project+2', // Placeholder image
  },
  {
    title: 'Social Media App',
    description: 'A social media platform with features like messaging, following, and sharing posts.',
    image: 'https://via.placeholder.com/400x200/00c6ff/ffffff?text=Project+3', // Placeholder image
  },
  {
    title: 'Weather App',
    description: 'A weather app that provides real-time weather updates based on the user’s location.',
    image: 'https://via.placeholder.com/400x200/ff6a00/ffffff?text=Project+4', // Placeholder image
  }
];

const Projects = () => {
  return (
    <div className="projects-container" style={{ padding: '20px' }}>
      <Grid container spacing={4}>
        {fakeProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
