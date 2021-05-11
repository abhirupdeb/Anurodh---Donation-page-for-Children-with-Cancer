const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");
const headtext = document.querySelector(".headText");
const childnode = document.getElementById("#donate");
const section1 = document.querySelector(".first")


hamburger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    headtext.classList.toggle("hidden");
    // for (var node of childnode){
    //     node.disabled = true;
    // }
    links.forEach(link => {
        link.classList.toggle("fade")
    })
})