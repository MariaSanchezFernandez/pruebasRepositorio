import gsap from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js";
import ScrollTrigger from "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/ScrollTrigger.min.js";

window.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    let cards = gsap.utils.toArray(".card");

    cards.forEach((card, i) => {
        ScrollTrigger.create({
            trigger: card,
            start: "top-=20%",
            end: "top bottom",
            endTrigger: ".proyectosSecundarios",
            pin: true,
            pinSpacing: true,
            markers: true,
            scrub: true,
            anticipatePin: 1
        });
    });
});