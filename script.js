// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el, index) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 120);
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// STATS COUNTER (Home Page)
const statNumbers = document.querySelectorAll(".stat-number");

function animateStats() {
  statNumbers.forEach((el) => {
    const target = parseInt(el.getAttribute("data-target"), 10);
    if (!target) return;

    let current = 0;
    const increment = Math.max(1, Math.floor(target / 60));

    const update = () => {
      current += increment;
      if (current >= target) {
        el.textContent = target;
      } else {
        el.textContent = current;
        requestAnimationFrame(update);
      }
    };

    update();
  });
}

window.addEventListener("load", animateStats);
