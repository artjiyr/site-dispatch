const intro = document.getElementById("intro");
const video = document.getElementById("intro-video");
const site = document.getElementById("site");
const bgVideo = document.getElementById("bg-video");

gsap.registerPlugin(ScrollTrigger);

site.style.visibility = "hidden";
site.style.opacity = "0";

video.addEventListener("ended", () => {
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";

        site.style.visibility = "visible";
        site.style.opacity = "1";

        bgVideo.pause();
        bgVideo.currentTime = 0;
        bgVideo.play();

        iniciarAnimacoes();
        ScrollTrigger.refresh();
    }, 1000);
});

function iniciarAnimacoes() {

    gsap.set(".logo, .links a", {
        opacity: 0,
        y: -40
    });

    gsap.set(".dispatch", {
        opacity: 0,
        y: 40
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
    })
    .to(".dispatch", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.4,
        ease: "power3.out"
    });

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

    gsap.from(".image img", {
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
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out"
    });

    gsap.from(".empresa_imagem img", {
        scrollTrigger: {
            trigger: "#empresa",
            start: "top 30%"
        },
        opacity: 0,
        x: -60,
        duration: 2,
        stagger: 0.3,
        ease: "power3.out"
    });

    gsap.from(".empresa_texto h1, .empresa_texto p", {
        scrollTrigger: {
            trigger: "#empresa",
            start: "top 30%"
        },
        opacity: 0,
        x: 60,
        duration: 1,
        stagger: 0.4,
        ease: "power3.out"
    });

    gsap.from("footer, .banner h1, .banner img, .contato p, .contato a", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 30%"
        },
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        ease: "power3.out"
    });
}

