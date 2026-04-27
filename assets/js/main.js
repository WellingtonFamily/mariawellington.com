const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("open");
    });
  });
}

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const accents = document.querySelectorAll("[data-float]");
  accents.forEach((el, index) => {
    el.animate(
      [
        { transform: "translateY(0px)" },
        { transform: "translateY(-7px)" },
        { transform: "translateY(0px)" }
      ],
      {
        duration: 3800 + index * 600,
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  });
}
