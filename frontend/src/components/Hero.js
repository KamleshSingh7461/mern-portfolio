import React from 'react';
import ParticlesComponent from './ParticlesComponent'; // Import the particles component
import './Hero.css'; // Import the styles

const Hero = () => {
  return (
    <div className="home">
      <ParticlesComponent /> {/* Add Particles Component */}
      <div className="hero-content">
        <h1>Hi, I'm <span className="text-customColor">Kamlesh</span></h1>
        <h4>I develop full-stack web applications using <span className="rainbow-text">MERN Stack</span></h4>
      </div>
    </div>
  );
};

export default Hero;
