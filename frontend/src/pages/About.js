import React from 'react';
import ParticlesComponent from '../components/ParticlesComponent'; // ✅ Import the background animation
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <ParticlesComponent /> {/* ✅ Add background animation here */}

      <div id="about" className="container" data-aos="fade-up">
        <h4 className="intro-title">INTRODUCTION</h4>
        <h1 className="overview-heading">Overview</h1>
        <p className="about-text">
          Hi! I'm <span className="highlight">Kamlesh</span>, a passionate full-stack developer skilled in the MERN stack.
          I love building elegant, responsive, and interactive web applications that solve real-world problems.
          Whether it’s front-end flair or back-end logic, I enjoy crafting clean and efficient code.
        </p>
        <p className="about-text">
          I’m always excited to learn new technologies and improve my craft. When I’m not coding, you’ll find me exploring
          design trends, gaming, or working on creative side projects.
        </p>

        {/* Cards Section */}
        <div className="card-container">
          {/* Card 1 */}
          <div className="card" data-aos="zoom-in" data-aos-delay="100">
            <div className="bg"></div>
            <div className="blob"></div>
            <div className="icon-title">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00d8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
              <h3>Web Developer</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card" data-aos="zoom-in" data-aos-delay="200">
            <div className="bg"></div>
            <div className="blob"></div>
            <div className="icon-title">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
              </svg>
              <h3>React Developer</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card" data-aos="zoom-in" data-aos-delay="300">
            <div className="bg"></div>
            <div className="blob"></div>
            <div className="icon-title">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" />
                <path d="M4 9h16" />
                <path d="M9 4v16" />
              </svg>
              <h3>Backend Developer</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card" data-aos="zoom-in" data-aos-delay="400">
            <div className="bg"></div>
            <div className="blob"></div>
            <div className="icon-title">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff4081" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <h3>Full Stack Developer</h3>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* Work Experience Section */}
<div className="container" data-aos="fade-up">
  <h4 className="intro-title">MY JOURNEY</h4>
  <h1 className="overview-heading">Work Experience</h1>

  <div className="timeline">
    {/* Experience 1 */}
    <div className="timeline-item left">
      <div className="timeline-content">
        <h3>Frontend Developer</h3>
        <span className="timeline-date">Jan 2023 - Dec 2023</span>
        <p>
          Worked on building reusable UI components using React and Tailwind CSS. Collaborated with designers to implement responsive and modern web interfaces.
        </p>
      </div>
    </div>

    {/* Experience 2 */}
    <div className="timeline-item right">
      <div className="timeline-content">
        <h3>MERN Stack Developer</h3>
        <span className="timeline-date">Jan 2022 - Dec 2022</span>
        <p>
          Developed full-stack web apps using MongoDB, Express.js, React.js, and Node.js. Focused on performance optimization and clean RESTful APIs.
        </p>
      </div>
    </div>

    {/* Experience 3 */}
    <div className="timeline-item left">
      <div className="timeline-content">
        <h3>Backend Developer Intern</h3>
        <span className="timeline-date">Jun 2021 - Dec 2021</span>
        <p>
          Built authentication systems and implemented backend logic in Node.js. Integrated third-party APIs and improved server-side efficiency.
        </p>
      </div>
    </div>
  </div>
</div>
    </section>
    
  );
};

export default About;
