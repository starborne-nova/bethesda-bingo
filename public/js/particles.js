$(document).ready(async function () {
    await loadFull(tsParticles);
  
$("#tsparticles")
  .particles()
  .init({
    "background": {
      "color": {
        "value": "#06022d"
      }
    },
    "fullScreen": {
      "zIndex": -1
    },
    "interactivity": {
      "events": {
        "onHover": {
          "enable": true,
          "mode": "slow"
        }
      },
      "modes": {
        "bubble": {
          "divs": {
            "distance": 200,
            "duration": 0.4,
            "mix": false,
            "selectors": []
          }
        },
        "repulse": {
          "divs": {
            "distance": 20,
            "duration": 1,
            "factor": 50,
            "speed": 1,
            "maxSpeed": 20,
            "easing": "ease-out-quad",
            "selectors": []
          }
        }
      }
    },
    "particles": {
      "color": {
        "value": "#ffffff",
        "animation": {
          "h": {
            "enable": true,
            "speed": 20
          }
        }
      },
      "links": {
        "color": {
          "value": "#d3d3d3"
        },
        "enable": true,
        "opacity": 0.4
      },
      "move": {
        "enable": true,
        "path": {},
        "outModes": {
          "bottom": "out",
          "left": "out",
          "right": "out",
          "top": "out"
        },
        "speed": 1,
        "spin": {}
      },
      "number": {
        "density": {
          "enable": true
        },
        "value": 80
      },
      "opacity": {
        "value": 0.5,
        "animation": {}
      },
      "size": {
        "value": {
          "min": 0.1,
          "max": 3
        },
        "animation": {}
      }
    }
  });
  });