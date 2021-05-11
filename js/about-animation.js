const heading = document.querySelector(".About-head");
const description = document.querySelector(".description");
const hr = document.querySelector(".hr");
const timeline = new TimelineMax({ delay: 0.2 });

window.onload = () => {
    timeline.fromTo(heading, 0.5, { y: -50, opacity: 0 }, { y: 0, opacity: 1 });
    timeline.fromTo(hr, 0.5, { x: -50, opacity: 0 }, { x: 0, opacity: 1 });
    timeline.fromTo(description, 1, { opacity: 0 }, { opacity: 1 });
}