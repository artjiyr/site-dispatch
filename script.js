const intro = document.getElementById("intro");
const video = document.getElementById("intro-video");
const site = document.getElementById("site");

video.addEventListener("ended", () => {
    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
        site.style.display = "block";
    }, 1000);
});

