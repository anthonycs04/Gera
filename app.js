// Configuración de Particles.js con más interactividad y efectos
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100, // Aumenta el número de partículas
            density: {
                enable: true,
                value_area: 1000
            }
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#fff'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.1
            }
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse' // Efecto de repulsión cuando el ratón pasa por encima
            },
            onclick: {
                enable: true,
                mode: 'push' // Partículas adicionales cuando haces clic
            }
        }
    },
    retina_detect: true
});
