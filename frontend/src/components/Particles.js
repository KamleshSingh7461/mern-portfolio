import React, { useEffect } from 'react';
import { Engine, Container } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

const ParticlesComponent = () => {
  useEffect(() => {
    const particlesInit = async (main) => {
      await loadFull(main);
    };

    const particlesLoaded = (container) => {
      console.log(container);
    };

    return (
      <Engine
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: '#0d47a1',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'window',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 3,
            },
          },
        }}
      />
    );
  }, []);

  return <Container id="tsparticles" style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticlesComponent;
