import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBg() {
  const [particleCount, setParticleCount] = useState(50);
  async function LoadParticles(main) {
    await loadFull(main);
  }
  const adjustParticleCount = () => {
    const width = window.innerWidth;

    let newParticleCount = 70;
    if (width < 600) {
      newParticleCount = 20;
    }

    setParticleCount(newParticleCount);
  };

  useEffect(() => {
    const handleResize = () => {
      adjustParticleCount();
    };

    window.addEventListener("resize", handleResize);

    adjustParticleCount();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const particleStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };
  return (
    <Particles
      id="tsparticles"
      init={LoadParticles}
      options={{
        fullScreen: {
          enable: false,
          zIndex: -1,
        },
        particles: {
          number: {
            value: particleCount,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: "#22d3ee",
          },
          shape: {
            type: "circle",
            // options: {
            //   sides: 5,
            // },
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 7,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#D3D3D4",
            opacity: 0.7,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: ["grab"],
            },
            onclick: {
              enable: false,
              mode: "bubble",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
        background: {
          color: "#fffff",
          image: "",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "cover",
        },
      }}
      style={particleStyles}
    />
  );
}

export default ParticleBg;
