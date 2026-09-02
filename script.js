const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 650);
});

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");
menuBtn?.addEventListener("click", () => navbar.classList.toggle("open"));
document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => navbar.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const modal = document.querySelector(".message-modal");
const messageText = document.querySelector("#messageText");
document.querySelectorAll(".message-buttons button").forEach(button => {
  button.addEventListener("click", () => {
    messageText.value = button.dataset.message;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  });
});
document.querySelector(".close-modal").addEventListener("click", () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
});
modal.addEventListener("click", e => {
  if (e.target === modal) modal.classList.remove("open");
});

document.querySelector(".copy-message").addEventListener("click", () => {
  const subject = "Portfolio Inquiry";
  const body = encodeURIComponent(messageText.value);

  window.location.href =
    `mailto:raisarahmaniailmi@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});

document.querySelectorAll(".project.small").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - .5) * 4;
    const y = ((e.clientY - r.top) / r.height - .5) * -4;
    card.style.transform = `perspective(700px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
  });
  card.addEventListener("mouseleave", () => card.style.transform = "");
});
/* =================================
   DARK / LIGHT MODE
================================= */

const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector(".theme-icon");

themeToggle?.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeIcon.textContent = "☾";
  } else {
    themeIcon.textContent = "☼";
  }

});