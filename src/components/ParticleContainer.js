import React, { Component } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

let engineReady = false;
const enginePromise = initParticlesEngine(async (engine) => {
  await loadSlim(engine);
}).then(() => {
  engineReady = true;
});

class ParticleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      particleCount: window.innerWidth < 768 ? 20 : 60,
      ready: engineReady
    };
  }

  componentDidMount() {
    if (!engineReady) {
      enginePromise.then(() => {
        this.setState({ ready: true });
      });
    }
  }

  render() {
    if (!this.state.ready) return null;

    return (
      <Particles
        id="particles-js"
        options={{
          particles: {
            number: {
              value: this.state.particleCount,
              density: {
                enable: true,
                width: 1500
              }
            },
            links: {
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
              value: { min: 0.5, max: 1 },
              animation: {
                enable: true,
                speed: 1
              }
            }
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              }
            },
            modes: {
              push: {
                quantity: 1
              }
            }
          },
          detectRetina: true
        }}
      />
    );
  }
}

export default ParticleContainer;
