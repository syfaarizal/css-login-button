// Toggle menu on mobile
const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const navLinks = document.querySelectorAll("nav li a");