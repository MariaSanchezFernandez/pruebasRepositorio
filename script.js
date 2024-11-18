gsap.registerPlugin(ScrollTrigger);
    
// para que funciones los link de la cabecera, si hago de manera normal se rompe el locomotive por lo que debería hacer el scroll desde el script
const enlaces = document.querySelectorAll('.cabecera');

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (event) => {
        event.preventDefault();
        
        const targetId = event.target.getAttribute('href').substring(1);
        
        const targetSection = document.getElementById(targetId);

        locoScroll.scrollTo(targetSection);

        ScrollTrigger.update();
    });
});

//Comandos para que al bajar, cambie el fondo de color entre blanco y negro por distintas

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".container"),
        smooth: true
    });

    ScrollTrigger.scrollerProxy(".container", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
    });

    gsap.to("body", {
        "--color": "white",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".inicio",
            scroller: ".container",
            scrub: true,
            start: "top bottom",
            end: "top top"
        }
    });

    gsap.to("body", {
        "--color": "white",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".presentacion",
            scroller: ".container",
            scrub: true,
            start: "top bottom",
            end: "top top"
        }
    });

    gsap.to("body", {
        "--color": "black",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".cv",
            scroller: ".container",
            scrub: true,
            start: "top bottom",
            end: "top top"
        }
    });

    gsap.to("body", {
        "--color": "white",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".proyectos",
            scroller: ".container",
            scrub: true,
            start: "top bottom",
            end: "top top"
        }
    });

    gsap.to("body", {
        "--color": "black",
        immediateRender: false,
        scrollTrigger: {
            trigger: ".formulario",
            scroller: ".container",
            scrub: true,
            start: "top bottom",
            end: "top top"
        }
    });

    
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

    //Botón del cv fijo

    ScrollTrigger.create({
        trigger: ".botonWrapper",
        scroller: ".container",
        pin: true,
        //pinSpacing:false,
        start: "center center",
        end :"+=100%",
        markers: false
        });

    //Confetti   
    let confetti = new Confetti('descargarCv');

    const descargarCvBtn = document.getElementById('descargarCv');
  const cvLink = document.getElementById('cvLink');

  let descargas = parseInt(localStorage.getItem('cvDescargas')) || 0;

  function actualizarEstado() {
    if (descargas >= 2) {
      cvLink.removeAttribute('href');
      cvLink.style.pointerEvents = 'none';
      descargarCvBtn.textContent = '¡Gracias por descargarlo!';
      descargarCvBtn.disabled = true;
    } else {
      descargarCvBtn.textContent = descargas === 1 ? 'Volver a descargar CV' : 'Descargar CV'; 
      cvLink.href = "cv/CV_MaríaSánchezFdez.pdf";
      cvLink.style.pointerEvents = 'auto';
      descargarCvBtn.disabled = false;
    }
  }

  actualizarEstado();

  descargarCvBtn.addEventListener('click', (event) => {
    if (descargas < 2) {
      descargas++;
      localStorage.setItem('cvDescargas', descargas);

      if (descargas === 2) {
        event.preventDefault();
        alert('Gracias por descargar el CV. Ya no puedes descargarlo más.');
      } else {
        alert('Gracias por descargar el CV. Puedes volver a descargarlo una vez más.');
      }
    }

    actualizarEstado();
  });

  // Seleccionar los sliders individuales
const sliderArriba = document.querySelector('.sliderImagenesArriba');
const sliderAbajo = document.querySelector('.sliderImagenesAbajo');

// Función para pausar y reanudar animaciones de los sliders
function manejarHoverSlider(slider, estado) {
    slider.style.animationPlayState = estado;
}

// Eventos para el slider de arriba
sliderArriba.addEventListener('mouseenter', () => manejarHoverSlider(sliderArriba, 'running'));
sliderArriba.addEventListener('mouseleave', () => manejarHoverSlider(sliderArriba, 'paused'));

// Eventos para el slider de abajo
sliderAbajo.addEventListener('mouseenter', () => manejarHoverSlider(sliderAbajo, 'running'));
sliderAbajo.addEventListener('mouseleave', () => manejarHoverSlider(sliderAbajo, 'paused'));

// Pausar ambos sliders al cargar la página
window.onload = () => {
    manejarHoverSlider(sliderArriba, 'paused');
    manejarHoverSlider(sliderAbajo, 'paused');
};
