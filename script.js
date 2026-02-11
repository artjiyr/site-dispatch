const intro = document.getElementById("intro");
const video = document.getElementById("intro-video");
const site = document.getElementById("site");

video.addEventListener("ended", () => {
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        site.style.display = "block";
    }, 1000);

//Header
gsap.set(".logo, .links a", {
    opacity: 0,
    y: -40
 });

const tl = gsap.timeline();

tl.to(".logo", {
    opacity: 1,
    y: 0,
    duration: 0.8
})
.to(".links a", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out"
});

//logo dispatch

gsap.set(".dispatch", {
    opacity: 0,
});

const dispatchtl = gsap.timeline();

tl.to(".dispatch", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.4,
    ease: "power3.in"
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#about h1, #about h2, #about p", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 30%"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".image", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 30%"
    },
    opacity: 0,
    x: 60,
    duration: 1,
    stagger: 0.5,
    ease: "power2.out"
});

gsap.from(".trailer, .trailer-titulo", {
    scrollTrigger: {
        trigger: "#trailers",
        start: "top 30%"
    }, 
    opacity: 0,
    y: 50,
    duration: 2,
    stagger: 0.3,
    ease: "power3.out"
})

gsap.from(".empresa_imagem img", {
    scrollTrigger: {
        trigger: "#empresa",
        start: "top 30%"
    }, 
    opacity: 0,
    x: 50,
    duration: 2,
    stagger: 0.3,
    ease: "power3.out"
})
});

