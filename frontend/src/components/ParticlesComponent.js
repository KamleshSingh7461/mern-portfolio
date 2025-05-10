// ParticlesComponent.js
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesComponent = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: { value: "#0f0f0f" }, // Elegant dark background
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "attract" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            attract: {
              distance: 140,
              duration: 0.3,
              easing: "ease-out-quad",
            },
            push: { quantity: 4 },
          },
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: { value: ["#00ffff", "#38bdf8", "#f472b6"] }, // Gradient tones
          shape: {
            type: ["circle", "triangle", "star"],
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false },
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#94a3b8", // subtle slate
            opacity: 0.3,
            width: 1.2,
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: { default: "bounce" },
            random: false,
            straight: false,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesComponent;
