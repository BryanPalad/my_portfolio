import React from 'react'
import Particle from 'react-particles-js'
const Particles = () => {
  return (
    <div>
         <Particle style={{position: 'absolute',left: 0, height: 'auto', overflow: 'hidden', display: 'flex', justifyContent:'center', alignItems: 'center'}}
  params={{
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": true,
                "value_area": 1500
            }
        },
        "line_linked": {
            "enable": true,
            "opacity": 0.03
        },
        "move": {
            "direction": "center",
            "speed": 1
        },
        "size": {
            "value": 1
        },
        "opacity": {
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.5
            }
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        },
        "modes": {
            "push": {
                "particles_nb": 1
            }
        }
    },
    "retina_detect": true
}} />
    </div>
  )
}

export default Particles