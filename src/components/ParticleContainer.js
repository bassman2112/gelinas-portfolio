import React, { Component } from "react";
import Particles from "react-particles-js";

class ParticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      particleCount: window.innerWidth < 768 ? 20 : 60
    };
  }

  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: this.state.particleCount,
              density: {
                enable: true,
                value_area: 1500
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.25
            },
            move: {
              direction: "right",
              speed: 0.15
            },
            size: {
              value: 3
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5
              }
            }
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              push: {
                particles_nb: 1
              }
            }
          },
          retina_detect: true
        }}
      />
    );
  }
}

export default ParticleContainer;
