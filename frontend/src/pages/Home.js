import React from 'react'; 
import '../pages/Home.css';
import ParticlesComponent from '../components/ParticlesComponent'; // Background animation

// Assuming that tech stack icons and card data are imported here
import { FaReact, FaNode, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; // Example icons
import { SiMongodb, SiExpress, SiDocker, SiPostgresql, SiGithub } from 'react-icons/si'; // Example icons

const Home = () => {
  const BASE_URL = "https://kamlesh-portfolio.onrender.com"; // Live backend URL

  return (
    <div className="home">
      <ParticlesComponent /> {/* Background animation */}
      <div className="hero-content">
        <div className="hero-row">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="text-customColor">Kamlesh Singh</span>
            </h1>
            <h4>I develop FullStack Web Applications,</h4><h3 className="rainbow-text">MERN Stack</h3>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <img src={`${BASE_URL}/images/profilepic`} alt="Hero" className="project-image" />
            </div>
            {/* Social media links */}
            <div className="socials-container">
              <a href="https://x.com/kamlesh7461" target="_blank" className="social-icon twitter" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/kamleshsingh2000/" target="_blank" className="social-icon linkedin" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/kamlesh_singh__4/" target="_blank" className="social-icon instagram" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="mailto:kamlesh7461@gmail.com" className="social-icon email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about">
        <div className="about-cards">
          {/* Add individual About Cards here */}
          <div className="about-card">
            <i><FaReact /></i>
            <h3>React.js</h3>
            <p>Building dynamic, responsive user interfaces with React and React Hooks.</p>
          </div>
          <div className="about-card">
            <i><FaNode /></i>
            <h3>Node.js</h3>
            <p>Server-side development using Node.js, Express, and MongoDB.</p>
          </div>
          <div className="about-card">
            <i><SiMongodb /></i>
            <h3>MongoDB</h3>
            <p>Document-based NoSQL database for efficient data storage and management.</p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <h2>My Skills</h2>
        <div className="skills-icons">
          {[
            'html-5.png', 'css3.png', 'javascript.png', 'tailwind.png',
            'react.png', 'redux.png', 'bootstrap.png', 'typescript.png',
            'nextjs.png', 'jquery.png', 'nodejs.png', 'express.png', 'mongodb.png',
            'mongoose.png', 'git.png', 'github.png'
          ].map((logo, index) => (
            <div className="tech-logo-container" key={index}>
              <img
                src={`${BASE_URL}/images/${logo}`}
                alt={logo.split('.')[0]}
                className="tech-logo"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
