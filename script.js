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

/* =================================
   SEND MESSAGE
================================= */

const modal = document.querySelector(".message-modal");
const messageText = document.querySelector("#messageText");
const senderName = document.querySelector("#senderName");
const senderEmail = document.querySelector("#senderEmail");
const sendMessageBtn = document.querySelector(".send-message");


// Tombol pilihan layanan
document.querySelectorAll(".message-buttons button").forEach(button => {

  button.addEventListener("click", () => {

    messageText.value = button.dataset.message;

    senderName.value = "";
    senderEmail.value = "";

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    senderName.focus();
  });

});


// Tombol X
document.querySelector(".close-modal").addEventListener("click", () => {

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

});


// Klik area luar modal
modal.addEventListener("click", e => {

  if (e.target === modal) {

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

  }

});


// SEND MESSAGE
sendMessageBtn.addEventListener("click", () => {

  const name = senderName.value.trim();
  const email = senderEmail.value.trim();
  const message = messageText.value.trim();

  // Cek input
  if (!name || !email || !message) {

    alert("Please fill in your name, email, and message.");

    return;
  }


  // Subject email
  const subject = encodeURIComponent(
    `Portfolio Message from ${name}`
  );


  // Isi email
  const body = encodeURIComponent(
`Hello Raissa,

My name is ${name}.

My email: ${email}

Message:
${message}

Thank you!`
  );


  // Buka Gmail Compose
  const gmailURL =
    `https://mail.google.com/mail/?view=cm&fs=1&to=raisarahmaniailmi@gmail.com&su=${subject}&body=${body}`;


  window.open(gmailURL, "_blank");


  // Tutup modal
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

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