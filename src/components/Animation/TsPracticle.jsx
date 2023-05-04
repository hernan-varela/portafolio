import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const TsPracticle = () => {
  const particlesInit = useCallback((async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }), []);

  const particlesLoaded = useCallback((async (container) => {
    console.log(container);
  }), []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#1fff0f",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
            reduceDuplicates: true, // Agrega esta propiedad
          }
          ,
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
            velocity: 2, // Nueva propiedad agregada
          },
          
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default TsPracticle;
