        // Registrar plugins de GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Inicializar LocomotiveScroll
        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(".container"),
            smooth: true
        });

        // Configurar ScrollTrigger para trabajar con LocomotiveScroll
        ScrollTrigger.scrollerProxy(".container", {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            },
            getBoundingClientRect() {
                return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },
            pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
        });

        // Animaciones de color de fondo para cada sección
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

        // Sincronizar Locomotive Scroll con ScrollTrigger
        locoScroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        ScrollTrigger.refresh();
