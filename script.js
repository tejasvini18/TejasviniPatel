// Counter animation
const counters = document.querySelectorAll(".stat-number");

counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    if (!target) return;

    let current = 0;
    const increment = Math.max(1, Math.floor(target / 80));

    const update = () => {
        current += increment;
        if (current >= target) {
            counter.textContent = target;
        } else {
            counter.textContent = current;
            requestAnimationFrame(update);
        }
    };

    update();
});

// Scroll reveal
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);
