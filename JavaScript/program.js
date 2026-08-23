function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}
// -----------page 2--------
const serviceBoxes = document.querySelectorAll(".box-ani, .box-ani2");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.7
});

serviceBoxes.forEach((box) => {
    observer.observe(box);
});
// ----------page 4-----------
const pricingBoxes = document.querySelectorAll(".pg4-box");

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-up");
            observer3.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.6
});

pricingBoxes.forEach((box) => {
    observer3.observe(box);
});