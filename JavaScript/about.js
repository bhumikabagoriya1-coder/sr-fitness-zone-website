function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}
// -------------page 2---------------
const buttons = document.querySelectorAll(".about-second-btn");
const contentBox = document.querySelector(".our-content");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        contentBox.classList.remove("animate-box");
        void contentBox.offsetWidth;
        contentBox.classList.add("animate-box");
    });
});

// -------about-content--about-img-----
const page2Elements = document.querySelectorAll(".about-content, .about-img");

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            if (entry.target.classList.contains("about-content")) {
                entry.target.classList.add("animate-left");
            }

            if (entry.target.classList.contains("about-img")) {
                entry.target.classList.add("animate-right");
            }

            observer2.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.7
});

page2Elements.forEach((element) => {
    observer2.observe(element);
});